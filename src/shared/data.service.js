import * as axios from 'axios';

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
};

import { API } from './config';

const getGame = async function(id) {
  try {
    const response = await axios.get(`${API}/games/${id}`);
    const game = parseItem(response, 200);
    return game;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const newGame = async function(playerName) {
  try {
    const game = {};
    if (playerName !== undefined) {
      game.name = playerName;
    }
    const response = await axios.post(`${API}/games`, game, {
      headers: { 'Content-Type': 'application/json' },
    });
    const newGame = parseItem(response, 201);
    return newGame;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPlayer = async function(id) {
  try {
    const response = await axios.get(`${API}/players/${id}`);
    const player = parseItem(response, 200);
    return player;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addPlayer = async function(playerName, game) {
  try {
    const player = {
      name: playerName,
      game: game['@id'],
    };
    const response = await axios.post(`${API}/players`, player);
    const addedPlayer = parseItem(response, 201);
    return addedPlayer;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const newRound = async function(game) {
  try {
    const round = {
      game: game['@id'],
    };
    const response = await axios.post(`${API}/rounds`, round);
    const newRound = parseItem(response, 201);
    return newRound;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteRound = async function(id) {
  try {
    const response = await axios.delete(`${API}/rounds/${id}`);
    parseItem(response, 204);
    return id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const newRoundCard = async function(card, player, round) {
  try {
    const roundCard = {
      round: round['@id'],
      card: card['@id'],
      player: player['@id'],
    };
    const response = await axios.post(`${API}/round_cards`, roundCard);
    const newRoundCard = parseItem(response, 201);
    return newRoundCard;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateRound = async function(round) {
  try {
    const response = await axios.put(`${API}/rounds/${round.id}`, round);
    const updatedRound = parseItem(response, 200);
    return updatedRound;
  } catch (error) {
    console.error(error);
    return null;
  }
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
};
