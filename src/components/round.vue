<template>
  <div>
    <b-collapse
      class="card"
      animation="slide"
      aria-id="roundCard"
      v-if="game.id"
    >
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="roundCard"
        id="round-card"
      >
        <p class="card-header-title">
          Round
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
        </a>
      </div>
      <div class="card-content" v-if="round && round.questionCard">
        <img :src="getCardImage(round.questionCard.image)" />
        <div v-for="card in round.winnerCards" :key="card['@id']">
          <div class="card-answer">
            <img :src="getCardImage(card.image)" />
          </div>
        </div>
        <nav class="level">
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
              <p class="heading">Status</p>
              <p class="title">
                {{ round.status }}
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Winner</p>
              <p class="title">
                {{ round.winner ? round.winner.name : '--' }}
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
          >Start</b-button
        >
        <b-button
          :type="getButtonColor('refreshRound')"
          class="card-footer-item"
          @click="getRoundAction"
          >Refresh</b-button
        >
        <b-button type="is-light" class="card-footer-item" @click="cancelRound"
          >Cancel</b-button
        >
        <b-button
          :type="getButtonColor('finishRound')"
          class="card-footer-item"
          @click="finishRound"
          >Finish</b-button
        >
      </footer>
    </b-collapse>
    <b-modal
      :active.sync="isRoundModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
      v-if="round && round.questionCard"
    >
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">The question was:</p>
        </header>
        <section class="modal-card-body">
          <div class="block">
            <img :src="getCardImage(round.questionCard.image)" />
          </div>
          <header class="modal-card-head">
            <p class="modal-card-title">And the winner is:</p>
          </header>
          <div class="block">
            <div
              v-for="playerAnswers in roundAnswers"
              :key="playerAnswers.player.id"
            >
              <div v-for="card in playerAnswers.cards" :key="card['@id']">
                <div
                  class="card-answer"
                  :class="winnerCardSelected(playerAnswers.player['@id'])"
                >
                  <img
                    :src="getCardImage(card.image)"
                    @click="setWinner(playerAnswers.player['@id'])"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="closeWinnerPopup()">
            Close
          </button>
          <button class="button is-primary" @click="setRoundWinner()">
            Finish round
          </button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import _ from 'lodash';
import { ToastProgrammatic as Toast } from 'buefy';
import { mixin } from '../shared/mixins';

export default {
  name: 'Round',
  data() {
    return {
      notification: {},
      isRoundModalActive: false,
      winner: '',
      currentRoundIri: '',
      roundAnswers: [],
    };
  },
  created() {
    let round = JSON.parse(window.localStorage.getItem('round'));
    if (round) {
      this.setRound(round);
    } else {
      this.setRound({});
    }
    this.startAutoUpdate();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  mixins: [mixin],
  computed: {
    ...mapState(['game', 'player', 'round', 'cardsSelected']),
  },
  methods: {
    ...mapActions([
      'startRoundAction',
      'cancelRoundAction',
      'finishRoundAction',
      'setRound',
      'getRoundAction',
    ]),
    async startRound() {
      await this.startRoundAction();
      this.startAutoUpdate();
    },
    async cancelRound() {
      if (!this.round || !this.round.questionCard) {
        Toast.open({
          message: 'no round in progress',
          type: 'is-danger',
        });
        return false;
      }
      if (this.round.status === 'finished') {
        Toast.open({
          message: 'cannot cancel finished round',
          type: 'is-danger',
        });
        return false;
      }
      await this.cancelRoundAction();
      this.setRound(this.round);
    },
    async finishRound() {
      if (this.round.status === 'finished') {
        Toast.open({
          message: 'round alredy finished',
          type: 'is-danger',
        });
        return false;
      }
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

      if (
        this.round.questionCard.answerCount * this.game.playersCount >
        this.round.cardsPlayedCount
      ) {
        this.$buefy.dialog.confirm({
          title: 'Confirm',
          message:
            'Not all players ready. Do you still want to finish this round?',
          confirmText: 'Finish round',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => {
            // this.cancelAutoUpdate();
            this.isRoundModalActive = true;
          },
        });
      } else {
        // this.cancelAutoUpdate();
        this.isRoundModalActive = true;
      }
      this.roundAnswers = _.shuffle(this.round.playersAnswers);
      this.winner = '';
      return false;
    },
    setWinner(playerIri) {
      this.winner = playerIri;
    },
    winnerCardSelected(playerIri) {
      if (this.winner == playerIri) {
        return 'has-background-success';
      } else {
        return '';
      }
    },
    async setRoundWinner() {
      this.isRoundModalActive = false;
      await this.finishRoundAction(this.winner);
      Toast.open({
        message: 'Round finished, how about starting another one?',
        type: 'is-success',
      });
      this.startAutoUpdate();
    },
    roundCardsSelected() {
      if (
        !this.cardsSelected ||
        (this.round.questionCard &&
          this.round.questionCard.answerCount != this.cardsSelected.length)
      ) {
        return 'has-background-danger';
      }
      return 'has-background-success';
    },
    winnerSelected() {
      if (
        !this.cardsSelected ||
        (this.round.questionCard &&
          this.round.questionCard.answerCount != this.cardsSelected.length)
      ) {
        return 'has-background-danger';
      }
      return 'has-background-success';
    },
    async refresh() {
      if (this.round['@id'] && this.round.status === 'new') {
        console.log('round refresh');
        await this.getRoundAction();
      } else {
        this.setRound(this.round);
      }

      if (this.round['@id'] != this.currentRoundIri) {
        this.currentRoundIri = this.round['@id'];
        this.isRoundModalActive = false;
        this.startAutoUpdate();
      }
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
    startAutoUpdate() {
      this.cancelAutoUpdate();
      this.timer = setInterval(this.refresh, 3000);
    },
    closeWinnerPopup() {
      this.isRoundModalActive = false;
      this.startAutoUpdate();
    },
  },
};
</script>
