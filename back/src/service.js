const axios = require("axios");

const apiGetPokemons = async (page = 1, limit = 15) => {
  try {
    const offset = (page - 1) * limit;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const pokemons = response.data.results;
    const formattedPokemons = [];

    for (const pokemon of pokemons) {
      const pokemonData = await axios.get(pokemon.url);
      const formattedPokemon = {
        name: pokemonData.data.name,
        height: pokemonData.data.height,
        experience: pokemonData.data.base_experience,
        weight: pokemonData.data.weight,
        abilities: pokemonData.data.abilities.map(
          (ability) => ability.ability.name
        ),
        image: pokemonData.data.sprites.front_default,
      };
      formattedPokemons.push(formattedPokemon);
    }

    // Mezclar los Pokemon de forma aleatoria
    const shuffledPokemons = formattedPokemons.sort(() => Math.random() - 0.5);

    return shuffledPokemons;
  } catch (error) {
    throw new Error("Error al obtener los Pokémon desde la API");
  }
};

module.exports = { apiGetPokemons };
