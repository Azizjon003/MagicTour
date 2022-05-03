const { findById } = require('../Model/tourModel');
const Tour = require('../Model/tourModel');
// const tourGetAll = (req, res) => {
//   res.status(200).json({
//     status: 'succes',

//     data: { reveiew },
//   });
// };
const rewiewgetAll = async (req, res) => {
  try {
    const data = await Tour.find();
    res.status(200).json({
      status: 'succes',
      results: data.length,
      data: data,
    });
  } catch (er) {
    res.status(404).json({
      status: 'fail',
      data: 'xato',
    });
  }
};
const postTour = async (req, res) => {
  try {
    const data = req.body;
    const tourModel = await Tour.create(req.body);
    // const dataSave = await tourModel.save();
    // console.log(dataSave);
    console.log(tourModel);
    res.status(201).json({
      status: 'succes',
      body: tourModel,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: 'XAtolik berildi',
    });
  }
};
const getIdTour = async (req, res) => {
  try {
    // const id = ;
    const data = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'succes',
      data: {
        data: data,
      },
    });
  } catch (er) {
    res.status(404).json({
      status: 'fail',
      data: {
        data: 'xatokeldi',
      },
    });
  }
};
const patchId = async (req, res) => {
  try {
    const data = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'succes',
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: 'failed',
    });
  }
};
const deleteId = async (req, res) => {
  try {
    const data = await Tour.findByIdAndDelete(req.params.id);
    console.log(data);
    res.status(200).json({
      status: 'uchirildi',
    });
  } catch (er) {
    res.status(404).json({
      status: 'fail',
    });
  }
};
module.exports = { rewiewgetAll, postTour, getIdTour, patchId, deleteId };
