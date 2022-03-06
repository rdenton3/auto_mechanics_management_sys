const { Repairs } = require('../models');

const repairsdata = [
  {
    item: 'Change oil and filter',
    status_id:  1,
    user_id: 10,
    car_id: 1
  },
  {
    item: 'Check lights, wipers, and washers. Clean air intake vents',
    status_id: 0,
    user_id: 8,
    car_id: 2
  },
  {
    item: 'Check condition of all fluids',
    status_id: 0,
    user_id: 1,
    car_id: 3
  },
  {
    item: 'Check underside of car, tires, exhaust, steering and suspension',
    status_id: 0,
    user_id: 4,
    car_id: 4
  },
  {
    item: 'Change Transmission',
    status_id: 0,
    user_id: 7,
    car_id: 5
  },
  {
    item: 'Check and adjust tire pressures & inspect condition of tires',
    status_id: 0,
    user_id: 4,
    car_id: 6
  },
  {
    item: 'Check belts and hoses. Record anti-freeze condition and protection',
    status_id: 0,
    user_id: 1,
    car_id: 6
  },
  {
    item: 'Check battery and leads, test and print results',
    status_id: 0,
    user_id: 1,
    car_id: 7
  },
  {
    item: 'Check steering handling & brakes',
    status_id: 0,
    user_id: 9,
    car_id: 8
  },
  {
    item: 'Check A/C and heating system',
    status_id: 0,
    user_id: 5,
    car_id: 9
  },
  {
    item: 'Check engine and transmission performance',
    status_id: 1,
    user_id: 3,
    car_id: 10
  },
  {
    item: 'Check battery, starting system and charging system',
    status_id: 1,
    user_id: 10,
    car_id: 11,
    },
  {
    item: 'Scan computer, check history related to check engine light & record codes',
    status_id: 1,
    user_id: 8,
    car_id: 1
  },
  {
    item: 'Check cooling system performance & condition of radiator and water pump',
    status_id: 0,
    user_id: 10,
    car_id: 2
  },
  {
    item: 'Check throttle body, add engine cleaner to gas tank',
    status_id: 0,
    user_id: 10,
    car_id: 3,
  },
  {
    item:'Replace fuel line injection',
    status_id: 0,
    user_id: 7,
    car_id: 4
  },
  {
    item: 'Clean and service battery connections',
    status_id: 0,
    user_id: 6,
    car_id: 5
  },
  {
    item: 'Inspect and change cabin filter if needed',
    status_id: 0,
    user_id: 4,
    car_id: 5
  },
  {
    item: 'Install fuel filter and spark plugs if needed',
    status_id: 0,
    user_id: 6,
    car_id: 10
  },
  {
    item: 'Fix broken light',
    status_id: 0,
    user_id: 7,
    car_id: 1
  }
];

const seedRepairs = () => Repairs.bulkCreate(repairsdata);

module.exports = seedRepairs;
