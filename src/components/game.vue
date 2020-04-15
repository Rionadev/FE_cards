<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Welcome to the Game!</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Game details</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">Game ID</label>
              <input class="input" name="id" v-model="game.id" />
            </div>
            <div class="field">
              <label class="label" for="name">Your name</label>
              <input class="input" name="name" v-model="player.name" />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <button class="link card-footer-item" @click="joinGame()">
            <i class="fas fa-sign-in-alt"></i>
            <span>Join game</span>
          </button>
          <button class="link card-footer-item" @click="createGame()">
            <i class="far fa-plus-square"></i>
            <span>Create game</span>
          </button>
        </footer>
      </div>
    </div>
    <Modal
      :message="modalMessage"
      :isOpen="showModal"
      @handleNo="closeModal(false)"
      @handleYes="closeModal(true)"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Modal from '@/components/modal';

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
    if (!this.isDuringGame) {
      this.game = {
        id: undefined,
      };
      this.player = {
        name: undefined,
      };
    }
  },
  computed: {
    ...mapGetters(),
    isDuringGame() {
      return this.id;
    },
  },
  methods: {
    ...mapActions(['createGameAction', 'addPlayerAction']),
    async createGame() {
      await this.createGameAction(this.player.name);
    },
    async joinGame() {
      if (!this.game.id) {
        alert('enter game id to join');
        return false;
      }
      await this.addPlayerAction(this.player.name);
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
