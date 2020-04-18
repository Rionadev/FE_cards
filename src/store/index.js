import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

import { dataService } from '../shared';
import {
  GAME_UPDATE,
  GAME_CREATE,
  PLAYER_UPDATE,
  ROUND_UPDATE,
  ROUND_CARD,
  ROUND_FINISH,
} from './mutation-types';

Vue.use(Vuex);

const state = () => ({
  game: {},
  player: {},
  round: {},
});

const mutations = {
  [GAME_CREATE](state, game) {
    window.localStorage.setItem('game', JSON.stringify(game));
    state.game = game;
  },
  [GAME_UPDATE](state, game) {
    window.localStorage.setItem('game', JSON.stringify(game));
    state.game = game;
  },
  [PLAYER_UPDATE](state, player) {
    window.localStorage.setItem('player', JSON.stringify(player));
    state.player = player;
  },
  [ROUND_UPDATE](state, round) {
    window.localStorage.setItem('round', JSON.stringify(round));
    state.round = round;
  },
  [ROUND_CARD](state, card) {
    if (state.round.cards == undefined) {
      state.round.cards = [];
    }
    state.round.cards.push(card);
  },
  [ROUND_FINISH](state, round) {
    state.round.winner = round.winner;
    window.localStorage.setItem('round', JSON.stringify(state.round));
  },
};

const actions = {
  // actions let us get to ({ state, getters, commit, dispatch }) {
  setGameId({ commit, state }, value) {
    let game = _.cloneDeep(state.game);
    game.id = value;
    commit(GAME_UPDATE, game);
  },
  async createGameAction({ commit, state }) {
    const game = await dataService.newGame(state.player.name);
    commit(GAME_CREATE, game);
    if (game.players.length) {
      commit(PLAYER_UPDATE, game.players[0]);
    }
  },
  async getGameAction({ commit, state }) {
    const game = await dataService.getGame(state.game.id);
    commit(GAME_UPDATE, game);
  },
  async getPlayerAction({ commit, state }) {
    const player = await dataService.getPlayer(state.player.id);
    commit(PLAYER_UPDATE, player);
  },
  async addPlayerAction({ commit, state }) {
    const newPlayer = await dataService.addPlayer(
      state.player.name,
      state.game['@id']
    );
    commit(PLAYER_UPDATE, newPlayer);
  },
  setPlayerName({ commit, state }, value) {
    let player = _.cloneDeep(state.player);
    player.name = value;
    commit(PLAYER_UPDATE, player);
  },
  async getRoundAction({ commit, state }) {
    const round = await dataService.getRound(state.round['@id']);
    commit(ROUND_UPDATE, round);
  },
  async startRoundAction({ commit, state }) {
    const round = await dataService.newRound(state.game);
    commit(ROUND_UPDATE, round);
  },
  async cancelRoundAction({ commit, state }) {
    await dataService.deleteRound(state.round['@id']);
    commit(ROUND_UPDATE, {});
  },
  async playCardsAction({ commit, state }, cards) {
    cards.forEach(async function(cardIri) {
      const playedCard = await dataService.newRoundCard(
        cardIri,
        state.player,
        state.round
      );
      commit(ROUND_CARD, playedCard);
    });
  },
  async finishRound({ commit, state }, player) {
    const round = state.round;
    round.winner = player;
    round.status = 'finished';
    const finishedRound = await dataService.updateRound(round);
    commit(ROUND_FINISH, finishedRound);
  },
  setGame({ commit }, game) {
    commit(GAME_UPDATE, game);
  },
  setPlayer({ commit }, player) {
    commit(PLAYER_UPDATE, player);
  },
  setRound({ commit }, round) {
    commit(ROUND_UPDATE, round);
  },
};

const getters = {};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
