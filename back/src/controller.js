const { apiGetPokemons } = require("./service");

exports.getPokemons = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pokemons = await apiGetPokemons(page, limit);
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Pokémon" });
  }
};
