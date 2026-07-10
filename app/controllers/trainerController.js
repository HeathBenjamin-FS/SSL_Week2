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
    res.status(404).json({
      success: false,
      message: "Something failed, please try again.",
    });
  }
};

const createTrainer = async (req, res) => {
  try {
    console.log(req.body);
    const trainer = (await Trainer.create(req.body)).populate("pokemon");
    res.status(200).json({
      id,
      data: trainer,
      success: true,
      method: req.method,
      message: "Trainer route post request made and data pushed.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Creation failed, please verify information and try again.",
    });
  }
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
    res.status(404).json({
      success: false,
      message: "Could not find this Trainer's ID. Veryify information and try again.",
      method: req.method,
    });
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
    res.status(404).json({
      success: false,
      message: "Could not update this Trainer. Try again.",
    });
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
    res.status(404).json({
      success: false,
      message: "Could not delete the Trainer. Please try again.",
    });
  }
};

module.exports = {
  getAllTrainers, //.find()
  createTrainer, //.create()
  getAllTrainersById, // .findById()
  updateTrainer, // .findByIdAndUpdate() (with options)
  deleteTrainer, // .findByIdAndDelete()
};
