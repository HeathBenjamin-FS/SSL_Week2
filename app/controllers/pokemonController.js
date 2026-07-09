const Pokemon = require("../models/Pokemon");

const getAllPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.find({});
    res.status(200).json({
      success: true,
      data: pokemon,
      method: req.method,
      message: "Pokemon GET route requested",
    });
  } catch (error) {
    console.log(error);
  }
};

const createPokemon = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const pokemon = await Pokemon.create(req.body);
  res.status(200).json({
    id,
    data: pokemon,
    success: true,
    method: req.method,
    message: "Pokemon route POST request made and data pushed.",
  });
};

const getAllPokemonById = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemonID = await Pokemon.findById(id);
    res.status(200).json({
      id,
      data: pokemonID,
      success: true,
      method: req.method,
      message: "Pokemon route request made with ID.",
    });
  } catch (error) {
    console.log(error);
  }
};

const updatePokemon = async (req, res) => {
  const { id } = req.params;

  try {
    const pokemonUpdate = await Pokemon.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      id,
      data: pokemonUpdate,
      success: true,
      method: req.method,
      message: "Pokemon route put request made with ID.",
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePokemon = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePokemon = await Pokemon.findByIdAndDelete(id);
    res.status(200).json({
      id,
      data: deletePokemon,
      success: true,
      method: req.method,
      message: "Pokemon route delete request made with ID.",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllPokemon, createPokemon, getAllPokemonById, updatePokemon, deletePokemon };
