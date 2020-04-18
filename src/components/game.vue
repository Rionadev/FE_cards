<template>
  <section>
    <div class="tile is-parent">
      <article class="tile is-child is-danger">
        <p class="title">Welcome to the Game!</p>
        <div class="content">
          <b-collapse class="card" animation="slide" aria-id="gameCard">
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
          <b-collapse
            class="card"
            animation="slide"
            aria-id="roundCard"
            v-if="game.scores"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
              aria-controls="contentIdForA11y3"
            >
              <p class="card-header-title">
                Round
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
              </a>
            </div>
            <div class="card-content" v-if="round.questionCard">
              <img :src="getCardImage(round.questionCard.image)" />
              <nav class="level is-mobile">
                <div
                  class="level-item has-text-centered"
                  :class="roundCardsSelected()"
                >
                  <div>
                    <p class="heading">Answers needed</p>
                    <p class="title">
                      {{ round.questionCard.answerCount }}
                    </p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Cards Played</p>
                    <p class="title">{{ round.cardsPlayedCount }}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Winner</p>
                    <p class="title">
                      {{ round.winner ? round.winner : '--' }}
                    </p>
                  </div>
                </div>
              </nav>
            </div>
            <footer class="card-footer">
              <b-button
                :type="getButtonColor('startRound')"
                class="card-footer-item"
                @click="startRound"
                >Start round</b-button
              >
              <b-button
                :type="getButtonColor('refreshRound')"
                class="card-footer-item"
                @click="getRoundAction"
                >Refresh round</b-button
              >
              <b-button
                type="is-light"
                class="card-footer-item"
                @click="cancelRound"
                >Cancel round</b-button
              >
              <b-button
                type="is-light"
                class="card-footer-item"
                @click="finishRound"
                >Finish round</b-button
              >
            </footer>
          </b-collapse>
          <b-collapse
            class="card"
            animation="slide"
            aria-id="playerCard"
            v-if="game.playersCount"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
              aria-controls="contentIdForA11y3"
            >
              <p class="card-header-title">{{ player.name }} - Your cards</p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
              </a>
            </div>
            <div class="card-content" v-if="player.cards">
              <nav class="level is-mobile">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Cards</p>
                    <p class="title">{{ player.cards.length }}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Selected</p>
                    <p class="title">{{ cardsSelected.length }}</p>
                  </div>
                </div>
              </nav>
              <div
                v-for="card in player.cards"
                :key="card.card['@id']"
                class="level-item has-text-centered"
              >
                <div
                  class="card-answer"
                  :class="checkCardSelected(card.card['@id'])"
                  @click="toggleCardSelect(card.card['@id'])"
                >
                  <img :src="getCardImage(card.card.image)" />
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <b-button
                type="is-light"
                class="card-footer-item"
                @click="getPlayerAction"
                >Refresh</b-button
              >
              <b-button
                type="is-light"
                class="card-footer-item"
                @click="playCards"
                :disabled="playCardsDisabled()"
                >Play cards</b-button
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

<style lang="scss">
.card-answer {
  padding: 3px;
}
</style>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import _ from 'lodash';
import Modal from '@/components/modal';
import { ToastProgrammatic as Toast } from 'buefy';
import { API } from '../shared/config';

export default {
  name: 'Game',
  data() {
    return {
      message: '',
      showModal: false,
      cardsSelected: [],
      roundPlayed: false,
      notification: {},
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
    let roundPlayed = JSON.parse(window.localStorage.getItem('roundPlayed'));
    if (roundPlayed !== undefined) {
      this.roundPlayed = roundPlayed;
    }
    let cardsSelected = JSON.parse(
      window.localStorage.getItem('cardsSelected')
    );
    if (cardsSelected !== undefined) {
      this.cardsSelected = cardsSelected;
    }

    this.debouncedLSSync = _.debounce(this.localStorageSync, 1000);
  },
  watch: {
    cardsSelected: function() {
      this.debouncedLSSync();
    },
    roundPlayed: function() {
      this.debouncedLSSync();
    },
  },
  computed: {
    ...mapState(['game', 'player', 'round']),
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
      'getPlayerAction',
      'startRoundAction',
      'cancelRoundAction',
      'finishRoundAction',
      'playCardsAction',
      'setPlayerName',
      'setGameId',
      'setGame',
      'setRound',
      'setPlayer',
      'getRoundAction',
    ]),
    localStorageSync() {
      window.localStorage.setItem(
        'roundPlayed',
        JSON.stringify(this.roundPlayed)
      );
      window.localStorage.setItem(
        'cardsSelected',
        JSON.stringify(this.cardsSelected)
      );
    },
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
    async startRound() {
      await this.startRoundAction();
      this.roundPlayed = false;
      this.cardsSelected = [];
    },
    async cancelRound() {
      if (!this.round.questionCard) {
        Toast.open({
          message: 'no round in progress',
          type: 'is-danger',
        });
        return false;
      }
      await this.cancelRoundAction();
      this.setRound(this.round);
    },
    async finishRound() {
      if (!this.round.questionCard) {
        Toast.open({
          message: 'no round in progress',
          type: 'is-danger',
        });
        return false;
      }
      if (!this.round.cardsPlayedCount) {
        Toast.open({
          message: 'no cards played - cancel round if you want',
          type: 'is-danger',
        });
        return false;
      }
      await this.finishRoundAction(player);
    },
    async playCards() {
      await this.playCardsAction(this.cardsSelected);
      this.roundPlayed = true;
      Toast.open({
        message: 'Cards sent',
        type: 'is-success',
      });
      this.getPlayerAction();
    },
    openModal() {
      this.showModal = true;
    },
    closeModal(choice) {
      console.log(choice);
      this.showModal = false;
    },
    getCardImage(image) {
      return API + image;
    },
    getButtonColor(button) {
      switch (button) {
        case 'startRound':
          if (!this.round.questionCard) {
            return 'is-success';
          }
          break;
        case 'refreshRound':
          if (this.round.questionCard) {
            return 'is-success';
          }
          break;
        case 'reloadGame':
          if (this.game.id && this.player.id) {
            return 'is-success';
          }
          break;
        case 'beforeGame':
          if (!this.game.id) {
            return 'is-success';
          }
          break;
      }
      return 'is-light';
    },
    roundCardsSelected() {
      if (
        this.round.questionCard &&
        this.round.questionCard.answerCount != this.cardsSelected.length
      ) {
        return 'has-background-danger';
      }
      return 'has-background-success';
    },
    toggleCardSelect(cardId) {
      if (this.roundPlayed) {
        return false;
      }

      let selected = this.cardsSelected.filter(function(card) {
        return card === cardId;
      });
      if (selected.length) {
        this.cardsSelected = this.cardsSelected.filter(function(card) {
          return card !== cardId;
        });
      } else {
        this.cardsSelected.push(cardId);
      }

      if (!this.playCardsDisabled()) {
        this.notification = this.$buefy.snackbar.open({
          message: 'Ready to play?',
          type: 'is-success',
          position: 'is-bottom',
          actionText: 'Send cards',
          indefinite: true,
          queue: false,
          onAction: () => {
            this.playCards();
          },
        });
      } else {
        this.notification.close();
      }
    },
    checkCardSelected(cardId) {
      let selected = this.cardsSelected.filter(function(card) {
        return card === cardId;
      });
      return selected.length ? 'has-background-success' : '';
    },
    playCardsDisabled() {
      return (
        !this.round.questionCard ||
        this.round.questionCard.answerCount !== this.cardsSelected.length ||
        this.roundPlayed
      );
    },
  },
};
</script>
