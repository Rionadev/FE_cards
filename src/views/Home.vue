<template>
  <div class="home">
    <img alt="Ze game" src="../assets/unnamed.jpg" />
    <section>
      <div class="tile is-parent">
        <article class="tile is-child is-danger">
          <p class="title">Karty dżentelmenów</p>
          <div class="content">
            <Game />
            <Round />
            <Player />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/game.vue';
import Round from '@/components/round.vue';
import Player from '@/components/player.vue';

export default {
  name: 'Home',
  components: {
    Game,
    Round,
    Player,
  },
};
</script>
