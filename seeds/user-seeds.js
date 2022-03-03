const sequelize = require('../config/connection');
const { User, Customer } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'mechanic',
    email: 'mechanic@fastnfurious.com',
    password: 'password123',
    admin1: true,
  },

  {
    id: 2,
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    admin1: false,
  },
  // {
  //   id: 3,
  //   username: 'jwilloughway1',
  //   email: 'rmebes1@sogou.com',
  //   password: 'password123',
  //   admin: 0,
  // },
  // {
  //   id: 4,
  //   username: 'iboddam2',
  //   email: 'cstoneman2@last.fm',
  //   password: 'password123',
  //   admin: 0,
  // },
  // {
  //   id: 5,
  //   username: 'dstanmer3',
  //   email: 'ihellier3@goo.ne.jp',
  //   password: 'password123',
  //   admin: 0,
  // },
  // {
  //   id: 6,
  //   username: 'djiri4',
  //   email: 'gmidgley4@weather.com',
  //   password: 'password123',
  //   admin: 0,
  // },
  // {
  //   id: 7,
  //   username: 'msprague5',
  //   email: 'larnout5@imdb.com',
  //   password: 'password123',
  //   admin: 0,
  // },
  // {
  //   id: 8,
  //   username: 'mpergens6',
  //   email: 'hnapleton6@feedburner.com',
  //   password: 'password123',
  //   admin: 0,
  // },
  // {
  //   id: 9,
  //   username: 'tpenniell7',
  //   email: 'kperigo7@china.com.cn',
  //   password: 'password123',
  //   admin: 0,
  // },
  // {
  //   id: 10,
  //   username: 'msabbins8',
  //   email: 'lmongain8@google.ru',
  //   password: 'password123',
  //   admin: 0,
  // },
  // {
  //   id: 11,
  //   username: 'jmacarthur9',
  //   email: 'bsteen9@epa.gov',
  //   password: 'password123',
  //   admin: 0,
  // }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
