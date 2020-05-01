import { API, URL } from './config';

export const mixin = {
  methods: {
    getButtonColor: function(button) {
      switch (button) {
        case 'startRound':
          if (
            !this.round ||
            !this.round.questionCard ||
            this.round.status === 'finished'
          ) {
            return 'is-success';
          }
          break;
        case 'refreshRound':
          if (
            this.round &&
            this.round.questionCard &&
            this.round.status !== 'finished'
          ) {
            return 'is-success';
          }
          break;
        case 'finishRound':
          if (
            this.round &&
            this.round.status !== 'finished' &&
            this.round.questionCard &&
            this.round.questionCard.answerCount * this.game.playersCount ==
              this.round.cardsPlayedCount
          ) {
            return 'is-success';
          }
          break;

        case 'reloadGame':
          if (this.game.id && this.player.id) {
            return 'is-success';
          }
          break;
        case 'createGame':
          if (!this.game.id) {
            return 'is-success';
          }
          break;
        case 'joinGame':
          if (
            !this.player ||
            !this.game.players ||
            this.game['@id'] != this.player.game
          ) {
            return 'is-success';
          }
          break;
      }
      return 'is-light';
    },
    getCardImage: function(image) {
      return API + image;
    },
    getGameUrl(gameId) {
      return URL + '?game=' + gameId;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
