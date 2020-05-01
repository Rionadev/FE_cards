import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

import { dataService } from '../shared';
import {
  GAME_UPDATE,
  GAME_CREATE,
  PLAYER_UPDATE,
  ROUND_NEW,
  ROUND_UPDATE,
  ROUND_CARD,
  ROUND_FINISH,
  ROUND_PLAYED,
  CARDS_SELECTED,
} from './mutation-types';

Vue.use(Vuex);

const state = () => ({
  game: {},
  player: {},
  round: {},
  cardsSelected: [],
  roundPlayed: false,
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
  [ROUND_NEW](state, round) {
    state.round = round;
    window.localStorage.setItem('round', JSON.stringify(round));
  },
  [ROUND_CARD](state, card) {
    if (state.round.cards == undefined) {
      state.round.cards = [];
    }
    state.round.cards.push(card);
  },
  [ROUND_FINISH](state, round) {
    state.round.winner = round.winner;
    state.round.status = round.status;
    window.localStorage.setItem('round', JSON.stringify(state.round));
  },
  [ROUND_PLAYED](state, roundPlayed) {
    state.roundPlayed = roundPlayed;
    window.localStorage.setItem('roundPlayed', JSON.stringify(roundPlayed));
  },
  [CARDS_SELECTED](state, cards) {
    state.cardsSelected = cards;
    window.localStorage.setItem('cardsSelected', JSON.stringify(cards));
  },
};

const actions = {
  // actions let us get to ({ state, getters, commit, dispatch }) {
  setGameId({ commit, state }, value) {
    let game = _.cloneDeep(state.game);
    game.id = value;
    commit(GAME_UPDATE, game);
  },
  setGameType({ commit, state }, value) {
    let game = _.cloneDeep(state.game);
    game.type = value;
    commit(GAME_UPDATE, game);
  },
  async createGameAction({ commit, state }, gameInfo) {
    const game = await dataService.newGame(
      gameInfo.playerName,
      gameInfo.gameType
    );
    commit(GAME_CREATE, game);
    if (game.players.length) {
      commit(PLAYER_UPDATE, game.players[0]);
    }
    commit(ROUND_UPDATE, {});
  },
  async getGameAction({ commit, state }) {
    const game = await dataService.getGame(state.game.id);
    commit(GAME_UPDATE, game);
    if (game.activeRound && game.activeRound['@id'] != state.round['@id']) {
      commit(ROUND_UPDATE, game.activeRound ? game.activeRound : {});
      commit(ROUND_PLAYED, false);
      commit(CARDS_SELECTED, []);
    }
  },
  async getPlayerAction({ commit, state }) {
    const player = await dataService.getPlayer(state.player.id);
    commit(PLAYER_UPDATE, player);
  },
  async addPlayerAction({ commit, state }, playerName) {
    const newPlayer = await dataService.addPlayer(
      playerName,
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
    if (round['@id'] != state.round['@id']) {
      commit(ROUND_PLAYED, false);
      commit(CARDS_SELECTED, []);
    }
    commit(ROUND_UPDATE, round);
  },
  async startRoundAction({ commit, state }) {
    const round = await dataService.newRound(state.game);
    commit(ROUND_NEW, round);
    commit(ROUND_PLAYED, false);
    commit(CARDS_SELECTED, []);
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
  async finishRoundAction({ commit, state }, playerIri) {
    const roundPut = {
      winner: playerIri,
      status: 'finished',
    };
    const finishedRound = await dataService.updateRound(state.round, roundPut);
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
  setRoundPlayed({ commit }, roundPlayed) {
    commit(ROUND_PLAYED, roundPlayed);
  },
  setCardsSelected({ commit }, cardsSelected) {
    commit(CARDS_SELECTED, cardsSelected);
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
