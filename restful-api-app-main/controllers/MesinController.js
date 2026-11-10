const Mesin = require('../models/MesinModel');

exports.create = async (req, res) => {
  try {
    const mesin = await Mesin.create(req.body);
    res.status(201).json(mesin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Mesin.find());
};