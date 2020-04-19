<template>
  <b-collapse class="card" animation="slide" aria-id="gameCard">
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header"
      role="button"
      aria-controls="gameCard"
    >
      <p class="card-header-title">
        Game details
      </p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
      </a>
    </div>
    <div class="card-content">
      <nav class="level is-mobile" v-if="game.playersCount">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Players</p>
            <p class="title">{{ game.playersCount }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Rounds</p>
            <p class="title">{{ game.roundsCount }}</p>
          </div>
        </div>
      </nav>
      <div v-if="game.scores">
        <h4>Scores</h4>
        <nav class="level">
          <div
            v-for="score in game.scores"
            :key="score.player"
            class="level-item has-text-centered"
          >
            <div>
              <p class="heading">{{ score.player }}</p>
              <p class="title">{{ score.score }}</p>
            </div>
          </div>
        </nav>
      </div>
      <div class="content">
        <b-field label="Game ID">
          <b-input v-model="gameId"></b-input>
        </b-field>
        <b-field label="Your name">
          <b-input v-model="playerName"></b-input>
        </b-field>
      </div>
    </div>
    <footer class="card-footer">
      <b-button
        :type="getButtonColor('beforeGame')"
        class="card-footer-item"
        @click="joinGame"
        >Join game</b-button
      >
      <b-button
        :type="getButtonColor('reloadGame')"
        class="card-footer-item"
        @click="getGameAction"
        >Reload</b-button
      >
      <b-button
        :type="getButtonColor('beforeGame')"
        class="card-footer-item"
        @click="createGame"
        >Create a game</b-button
      >
    </footer>
  </b-collapse>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import _ from 'lodash';
import { ToastProgrammatic as Toast } from 'buefy';
import { mixin } from '../shared/mixins';

export default {
  name: 'Game',
  data() {
    return {
      notification: {},
      timer: '',
    };
  },
  mixins: [mixin],
  created() {
    let game = JSON.parse(window.localStorage.getItem('game'));
    if (game) {
      this.setGame(game);
    }
    this.timer = setInterval(this.refresh, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  computed: {
    ...mapState(['game', 'player', 'round']),
    isDuringGame() {
      return this.game.id;
    },
    gameId: {
      get() {
        return this.game.id;
      },
      set(value) {
        this.setGameId(value);
      },
    },
    playerName: {
      get() {
        return this.player.name;
      },
      set(value) {
        this.setPlayerName(value);
      },
    },
  },
  methods: {
    ...mapActions([
      'createGameAction',
      'addPlayerAction',
      'getGameAction',
      'setPlayerName',
      'setGameId',
      'setGame',
    ]),
    async createGame() {
      if (!this.player.name) {
        Toast.open({
          message: 'enter player name to create a game',
          type: 'is-danger',
        });
        return false;
      }
      await this.createGameAction();
    },
    async joinGame() {
      if (!this.game.id || !this.player.name) {
        Toast.open({
          message: 'enter player name and game id to join',
          type: 'is-danger',
        });
        return false;
      }
      await this.getGameAction();
      await this.addPlayerAction();
      await this.getGameAction();
    },
    async refresh() {
      if (this.game.id) {
        console.log('game refresh');
        await this.getGameAction();
      }
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
};
</script>
