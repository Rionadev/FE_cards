<template>
  <div class="home">
    <img alt="Ze game" src="../assets/unnamed.jpg" />
    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/game.vue';

export default {
  name: 'Home',
  components: {
    Game,
  },
};
</script>
