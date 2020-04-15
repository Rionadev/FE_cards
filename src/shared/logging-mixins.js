import { logger } from './';

const hookMessageSuffix = 'hook called (from mixin)';

export const lifecycleHooks = {
  // Computeds
  computed: {
    componentName() {
      return `${this.$options.name} component`;
    },
  },
  // LifeCycle Hooks
  created() {
    logger.info(`${this.componentName} created ${hookMessageSuffix}`);
    logger.info('component data', this.$data);
  },
  mounted() {
    logger.info(`${this.componentName} mounted ${hookMessageSuffix}`);
  },
  updated() {
    logger.info(`${this.componentName} updated ${hookMessageSuffix}`);
  },
  destroyed() {
    logger.info(`${this.componentName} destroyed ${hookMessageSuffix}`);
  },
};
