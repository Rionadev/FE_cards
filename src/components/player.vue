<template>
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
      aria-controls="playerCard"
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
            <p class="title">{{ cardsSelected ? cardsSelected.length : 0 }}</p>
          </div>
        </div>
      </nav>
      <nav class="level" v-for="n in 3" :key="n">
        <div
          v-for="card in player.cards.slice((n - 1) * 4, (n - 1) * 4 + 4)"
          :key="card.card['@id']"
          class="level-item has-text-centered"
          :class="n"
        >
          <div
            class="card-answer"
            :class="checkCardSelected(card.card['@id'])"
            @click="toggleCardSelect(card.card['@id'])"
          >
            <img :src="getCardImage(card.card.image)" />
          </div>
        </div>
      </nav>
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
</template>

<style lang="scss">
.card-answer {
  padding: 3px;
}
</style>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import _ from 'lodash';
import { ToastProgrammatic as Toast } from 'buefy';
import { mixin } from '../shared/mixins';

export default {
  name: 'Player',
  data() {
    return {
      notification: {},
    };
  },
  mixins: [mixin],
  created() {
    let player = JSON.parse(window.localStorage.getItem('player'));
    if (player) {
      this.setPlayer(player);
    }
    let roundPlayed = JSON.parse(window.localStorage.getItem('roundPlayed'));
    if (roundPlayed) {
      this.setRoundPlayed(roundPlayed);
    } else {
      this.setRoundPlayed(false);
    }
    let cardsSelected = JSON.parse(
      window.localStorage.getItem('cardsSelected')
    );
    if (cardsSelected) {
      this.setCardsSelected(cardsSelected);
    } else {
      this.setCardsSelected([]);
    }

    this.debouncedLSSync = _.debounce(this.localStorageSync, 1000);
    this.timer = setInterval(this.refresh, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
    ...mapState(['game', 'player', 'round', 'cardsSelected', 'roundPlayed']),
  },
  methods: {
    ...mapActions([
      'getPlayerAction',
      'playCardsAction',
      'setPlayer',
      'setRoundPlayed',
      'setCardsSelected',
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
    async playCards() {
      if (this.playCardsDisabled()) {
        return false;
      }
      await this.playCardsAction(this.cardsSelected);
      this.setRoundPlayed(true);
      Toast.open({
        message: 'Cards sent',
        type: 'is-success',
      });
      this.getPlayerAction();
      this.$scrollTo('#round-card');
    },
    toggleCardSelect(cardId) {
      if (this.roundPlayed) {
        return false;
      }
      let selected = this.cardsSelected.filter(function(card) {
        return card === cardId;
      });
      if (selected.length) {
        let cardsSelected = this.cardsSelected.filter(function(card) {
          return card !== cardId;
        });
        this.setCardsSelected(cardsSelected);
      } else {
        let cardsSelected = _.clone(this.cardsSelected);
        cardsSelected.push(cardId);
        this.setCardsSelected(cardsSelected);
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
      } else if (this.notification.close) {
        this.notification.close();
      }
    },
    checkCardSelected(cardId) {
      if (!this.cardsSelected) {
        return '';
      }
      let selected = this.cardsSelected.filter(function(card) {
        return card === cardId;
      });
      return selected.length ? 'has-background-success' : '';
    },
    playCardsDisabled() {
      return (
        !this.cardsSelected ||
        !this.round.questionCard ||
        this.round.questionCard.answerCount !== this.cardsSelected.length ||
        this.roundPlayed
      );
    },
    async refresh() {
      if (this.player['@id']) {
        console.log('player refresh');
        await this.getPlayerAction();
      }
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
};
</script>
