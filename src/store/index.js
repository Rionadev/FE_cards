import Vue from "vue";
import Vuex from "vuex";

import { dataService } from "../shared";
import {
  GAME_GET,
  GAME_CREATE,
  PLAYER_GET,
  PLAYER_ADD,
  ROUND_START,
  ROUND_CANCEL,
  ROUND_CARD,
  ROUND_FINISH
} from "./mutation-types";

Vue.use(Vuex);

const state = () => ({
  game: {},
  player: {},
  round: {}
});

const mutations = {
  [GAME_CREATE](state, game) {
    state.game = game;
  },
  [GAME_GET](state, game) {
    state.game = game;
  },
  [PLAYER_GET](state, player) {
    state.player = player;
  },
  [PLAYER_ADD](state, player) {
    state.player = player;
  },
  [ROUND_START](state, round) {
    state.round = round;
  },
  [ROUND_CANCEL](state) {
    state.round = {};
  },
  [ROUND_CARD](state, card) {
    state.round.cards.push(card);
  },
  [ROUND_FINISH](state, player) {
    state.round.winner = player;
  }
};

const actions = {
  // actions let us get to ({ state, getters, commit, dispatch }) {
  async createGameAction({ commit }) {
    const game = await dataService.newGame();
    commit(GAME_CREATE, game);
  },
  async getGameAction({ commit }, gameId) {
    const game = await dataService.getGame(gameId);
    commit(GAME_GET, game);
  },
  async getPlayerAction({ commit }, playerId) {
    const player = await dataService.getPlayer(playerId);
    commit(PLAYER_GET, player);
  },
  async addPlayerAction({ commit }, player) {
    const newPlayer = await dataService.addPlayer(player);
    commit(PLAYER_ADD, newPlayer);
  },
  async startRoundAction({ commit }) {
    const round = await dataService.newRound();
    commit(ROUND_START, round);
  },
  async cancelRoundAction({ commit }, roundId) {
    await dataService.delRound(roundId);
    commit(ROUND_CANCEL);
  },
  async playCardAction({ commit }, card) {
    await dataService.newRoundCard(card);
    commit(ROUND_CARD, card);
  },
  async finishRoundAction({ commit }, player) {
    await dataService.setRoundWinner(player);
    commit(ROUND_FINISH, player);
  }
};

const getters = {
  // parameterized getters are not cached. so this is just a convenience to get the state.
  getPlayerById: state => id => state.players.find(h => h.id === id)
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  mutations,
  actions,
  getters
});
