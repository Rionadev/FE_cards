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
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <b-field grouped>
              <b-field label="Game ID" expanded>
                <b-field>
                  <b-input
                    placeholder="Paste game ID here to join"
                    v-model="gameId"
                    expanded
                  ></b-input>
                  <button class="button">
                    <b-icon
                      pack="fas"
                      icon="copy"
                      title="copy to clipboard"
                      v-clipboard:copy="gameId"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError"
                    ></b-icon>
                  </button>
                </b-field>
              </b-field>
              <b-field label="Your name" expanded>
                <b-input
                  placeholder="Player name"
                  v-model="playerName"
                ></b-input>
              </b-field>
            </b-field>
          </div>
        </div>
      </section>
    </div>
    <footer class="card-footer">
      <b-button
        :type="getButtonColor('beforeGame')"
        class="card-footer-item"
        @click="joinGame"
        >Join</b-button
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
        >Create</b-button
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

      if (this.game.id) {
        this.$buefy.dialog.confirm({
          title: 'Confirm',
          message: 'You will leave current game. Are you sure?',
          confirmText: 'Reset game',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: async () => {
            await this.createGameAction();
          },
        });
      } else {
        await this.createGameAction();
      }
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
    onCopy(e) {
      Toast.open({
        message: 'You just copied: ' + e.text,
        type: 'is-success',
      });
    },
    onError(e) {
      Toast.open({
        message: 'Failed to copy text',
        type: 'is-danger',
      });
    },
  },
};
</script>
