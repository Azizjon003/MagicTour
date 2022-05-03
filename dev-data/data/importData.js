const fs = require('fs');
const mongoose = require('mongoose');
const DB =
  'mongodb+srv://azizjon:azizjon3002@magictour.oya3o.mongodb.net/MagicTour?retryWrites=true&w=majority';

const Tour = require('../../Model/tourModel');

mongoose
  .connect(DB)
  .then((res) => {
    console.log('Connected');
  })
  .catch((er) => {
    console.log('xato');
  });

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const addInfo = async () => {
  try {
    const adddata = await Tour.create(data);
    console.log("Ma'lumotni qushdim");
    process.exit();
  } catch (er) {
    console.log(er);
    console.log('ishlamadi');
  }
};
const deleteData = async () => {
  try {
    const deleteD = await Tour.deleteMany();
    console.log('Tozalandi');
    process.exit();
  } catch (er) {
    console.log('ishlamadi');
  }
};
if (process.argv[2] === '--add') {
  addInfo();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
console.log(process.argv);
