const seedUsers = require('./user-seeds');
const seedCar = require('./car-seeds');
const seedRepairs = require('./repairs-seeds');
const seedSchedule = require('./schedule-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true }); //change this back to true
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedCar();
  console.log('--------------');

  await seedRepairs();
  console.log('--------------');

  await seedSchedule();
  console.log('--------------');

  process.exit(0);
};

seedAll();
