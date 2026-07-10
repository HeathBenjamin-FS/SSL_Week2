const Pokemon = require("../models/Pokemon");

const getAllPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.find({}).populate("trainer");
    res.status(200).json({
      success: true,
      data: pokemon,
      method: req.method,
      message: "Pokemon GET route requested",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Something failed, please try again.",
    });
  }
};

const createPokemon = async (req, res) => {
  try {
    console.log(req.body);
    const pokemon = await Pokemon.create(req.body);
    res.status(200).json({
      data: pokemon,
      success: true,
      method: req.method,
      message: "Pokemon route POST request made and data pushed.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Creation failed, please verify information and try again.",
    });
  }
};

const getAllPokemonById = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemonID = await Pokemon.findById(id).populate("trainer");
    res.status(200).json({
      id,
      data: pokemonID,
      success: true,
      method: req.method,
      message: "Pokemon route request made with ID.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Could not find this Pokemon's ID. Veryify information and try again.",
      method: req.method,
    });
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
    res.status(404).json({
      success: false,
      message: "Could not update this Pokemon. Try again.",
    });
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
    res.status(404).json({
      success: false,
      message: "Could not delete the Pokemon. Please try again.",
    });
  }
};

module.exports = { getAllPokemon, createPokemon, getAllPokemonById, updatePokemon, deletePokemon };
