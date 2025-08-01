import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 20, offset = 0) => {
  const response = await axios.get(`${API_BASE_URL}/pokemon`, {
    params: { limit, offset },
  });
  return response.data;
};

export const fetchPokemonDetails = async (name) => {
  const response = await axios.get(`${API_BASE_URL}/pokemon/${name}`);
  return response.data;
};

export const fetchPokemonSpecies = async (name) => {
  const response = await axios.get(`${API_BASE_URL}/pokemon-species/${name}`);
  return response.data;
};