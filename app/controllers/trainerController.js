const Trainer = require("../models/Trainer");

const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find({});
    res.status(200).json({
      success: true,
      data: trainers,
      method: req.method,
      message: "Trainer router request made!",
    });
  } catch (error) {
    console.log(error);
  }
};

const createTrainer = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const trainer = await Trainer.create(req.body);
  res.status(200).json({
    id,
    data: trainer,
    success: true,
    method: req.method,
    message: "Trainer route post request made and data pushed.",
  });
};

const getAllTrainersById = async (req, res) => {
  const { id } = req.params;
  try {
    const trainerID = await Trainer.findById(id);
    res.status(200).json({
      id,
      data: trainerID,
      success: true,
      method: req.method,
      message: "Trainer route request made with ID.",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTrainer = async (req, res) => {
  const { id } = req.params;

  try {
    const trainerUpdate = await Trainer.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      id,
      data: trainerUpdate,
      success: true,
      method: req.method,
      message: "Trainer route put request made with ID.",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTrainer = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTrainer = await Trainer.findByIdAndDelete(id);
    res.status(200).json({
      id,
      data: deleteTrainer,
      success: true,
      method: req.method,
      message: "Trainer route delete request made with ID.",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTrainers, //.find()
  createTrainer, //.create()
  getAllTrainersById, // .findById()
  updateTrainer, // .findByIdAndUpdate() (with options)
  deleteTrainer, // .findByIdAndDelete()
};
