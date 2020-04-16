<template>
  <section>
    <div class="tile is-parent">
      <article class="tile is-child is-danger">
        <p class="title">Welcome to the Game!</p>
        <div class="content">
          <b-collapse
            class="card"
            animation="slide"
            aria-id="contentIdForA11y3"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
              aria-controls="contentIdForA11y3"
            >
              <p class="card-header-title">
                Game details
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
              </a>
            </div>
            <div class="card-content">
              <nav class="level is-mobile">
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
                type="is-light"
                class="card-footer-item"
                @click="joinGame"
                >Join game</b-button
              >
              <b-button
                type="is-light"
                class="card-footer-item"
                @click="createGame"
                >Create a game</b-button
              >
            </footer>
          </b-collapse>
        </div>
      </article>
    </div>
    <Modal
      :message="modalMessage"
      :isOpen="showModal"
      @handleNo="closeModal(false)"
      @handleYes="closeModal(true)"
    >
    </Modal>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import _ from 'lodash';
import Modal from '@/components/modal';
import { ToastProgrammatic as Toast } from 'buefy';

export default {
  name: 'Game',
  data() {
    return {
      message: '',
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  created() {
    let game = JSON.parse(window.localStorage.getItem('game'));
    console.log(game);
    if (game) {
      this.setGame(game);
    }
    let player = JSON.parse(window.localStorage.getItem('player'));
    if (player) {
      this.setPlayer(player);
    }
    let round = JSON.parse(window.localStorage.getItem('round'));
    if (round) {
      this.setRound(round);
    }
  },
  computed: {
    ...mapState(['game', 'player']),
    isDuringGame() {
      return this.game.id;
    },
    modalMessage() {
      return `Would you like to?`;
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
      'setRound',
      'setPlayer',
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
    showAlert() {
      this.alert != '';
    },
    openModal() {
      this.showModal = true;
    },
    closeModal(choice) {
      console.log(choice);
      this.showModal = false;
    },
  },
};
</script>
