import { API } from './config';

export const mixin = {
  methods: {
    getButtonColor: function(button) {
      switch (button) {
        case 'startRound':
          if (!this.round.questionCard || this.round.status === 'finished') {
            return 'is-success';
          }
          break;
        case 'refreshRound':
          if (this.round.questionCard && this.round.status !== 'finished') {
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
    getCardImage: function(image) {
      return API + image;
    },
  },
};
