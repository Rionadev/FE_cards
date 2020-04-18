import * as axios from 'axios';
import { API } from './config';
import { ToastProgrammatic as Toast } from 'buefy';

const sendAlert = function(alert) {
  console.log(alert);
};

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
};

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log(error.response);
    if (error.response.data['hydra:description']) {
      Toast.open({
        message: error.response.data['hydra:description'],
        type: 'is-danger',
      });
    }
    return Promise.reject(error);
  }
);

const getGame = async function(id) {
  const response = await axios.get(`${API}/api/games/${id}`);
  const game = parseItem(response, 200);
  return game;
};

const newGame = async function(playerName) {
  const game = {};
  if (playerName !== undefined) {
    game.name = playerName;
  }
  const response = await axios.post(`${API}/api/games`, game);
  const newGame = parseItem(response, 201);
  return newGame;
};

const getPlayer = async function(id) {
  const response = await axios.get(`${API}/api/players/${id}`);
  const player = parseItem(response, 200);
  return player;
};

const addPlayer = async function(playerName, gameId) {
  let player = {
    name: playerName,
    game: gameId,
  };
  const response = await axios.post(`${API}/api/players`, player);
  const addedPlayer = parseItem(response, 201);
  return addedPlayer;
};

const newRound = async function(game) {
  let round = {
    game: game['@id'],
  };
  const response = await axios.post(`${API}/api/rounds`, round);
  const newRound = parseItem(response, 201);
  return newRound;
};

const getRound = async function(id) {
  const response = await axios.get(`${API}${id}`);
  const round = parseItem(response, 200);
  return round;
};

const deleteRound = async function(id) {
  const response = await axios.delete(`${API}${id}`);
  parseItem(response, 204);
  return id;
};

const newRoundCard = async function(cardIri, player, round) {
  let roundCard = {
    round: round['@id'],
    card: cardIri,
    player: player['@id'],
  };
  const response = await axios.post(`${API}/api/round_cards`, roundCard);
  const newRoundCard = parseItem(response, 201);
  return newRoundCard;
};

const updateRound = async function(round) {
  const response = await axios.put(`${API}/api/rounds/${round.id}`, round);
  const updatedRound = parseItem(response, 200);
  return updatedRound;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const dataService = {
  getGame,
  newGame,
  getPlayer,
  addPlayer,
  newRound,
  deleteRound,
  newRoundCard,
  updateRound,
  getRound,
};
