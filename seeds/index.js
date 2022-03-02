const seedUsers = require('./user-seeds');
const seedPosts = require('./customer-seeds');
const seedComments = require('./repairs-seeds');
const seedVotes = require('./schedule-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedCustomer();
  console.log('--------------');

  await seedRepairs();
  console.log('--------------');

  await seedSchedule();
  console.log('--------------');

  process.exit(0);
};

seedAll();
