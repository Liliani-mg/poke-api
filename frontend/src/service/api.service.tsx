import axios from "axios";

const BASE_URL = "https://poke-api-tyqw.onrender.com";

export const fetchPokemons = async (page = 1, limit = 15) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/pokemons?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching Pokémon data`);
  }
};
