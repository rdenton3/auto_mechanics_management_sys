const { Repairs } = require('../models');

const repairsdata = [
  {
    item: 'Oil Change',
    status_id:  1,
    user_id: 10,
    car_id: 15
  },
  {
    item: 'Morbi non quam nec d',
    status_id: 0,
    user_id: 8
  },
  {
    item: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    status_id: 0,
    user_id: 1
  },
  {
    item: 'Nunc purus.',
    status_id: 0,
    user_id: 4
  },
  {
    item: 'Pellentesque eget nunc.',
    status_id: 0,
    user_id: 7
  },
  {
    item: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    status_id: 0,
    user_id: 4
  },
  {
    item: 'In hac habitasse platea dictumst.',
    status_id: 0,
    user_id: 1
  },
  {
    item: 'Morbi non quam nec dui luctus rutrum.',
    status_id: 0,
    user_id: 1
  },
  {
    item: 'Duis ac nibh.',
    status_id: 0,
    user_id: 9
  },
  {
    item: 'Curabitur at ipsum ac tellus semper interdum.',
    status_id: 0,
    user_id: 5
  },
  {
    item: 'In hac habitasse platea dictumst.',
    status_id: 1,
    user_id: 3
  },
  {
    item: 'Breaks Checked',
    status_id: 1,
    user_id: 10,
    car_id: 15
  },
  {
    item: 'Donec dapibus.',
    status_id: 1,
    user_id: 8
  },
  {
    item: 'Nulla tellus.',
    status_id: 0,
    user_id: 3
  },
  {
    item: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    status_id: 0,
    user_id: 3
  },
  {
    item:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    status_id: 0,
    user_id: 7
  },
  {
    item: 'In hac habitasse platea dictumst.',
    status_id: 0,
    user_id: 6
  },
  {
    item: 'Etiam justo.',
    status_id: 0,
    user_id: 4
  },
  {
    item: 'Nulla ut erat id mauris vulputate elementum.',
    status_id: 0,
    user_id: 6
  },
  {
    item: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    status_id: 0,
    user_id: 7
  }
];

const seedRepairs = () => Repairs.bulkCreate(repairsdata);

module.exports = seedRepairs;
