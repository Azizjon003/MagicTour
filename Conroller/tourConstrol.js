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
    console.log('tryda');
    const data1 = { ...req.query };
    const removeQuery = ['sort', 'page', 'limit', 'field'];
    removeQuery.forEach((val) => {
      delete data1[val];
    });
    const query = JSON.stringify(data1)
      .replace(/\bgt\b/g, '$gt')
      .replace(/\blt\b/g, '$lt')
      .replace(/\blte\b/g, '$lte')
      .replace(/\bgte\b/g, '$gte');
    console.log(JSON.parse(query));
    let data = Tour.find(JSON.parse(query));

    if (req.query.sort) {
      const sortData = req.query.sort.split(',').join(' ');
      console.log(sortData);
      data = data.sort(sortData);
    }
    const queryData = await data;

    if (!queryData.length) throw new Error('error');

    res.status(200).json({
      status: 'succes',
      results: queryData.length,
      data: queryData,
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
    const tourModel = await Tour.create();
    // const queryStr =
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














