const { Schedule } = require("../models");

const scheduledata = [
  {
    Date: "01/02/2022",
    user_id: 10,
    car_id: 1,
    complete_id: 1,
  },
  {
    Date: "02/15/2022",
    user_id: 10,
    car_id: 1,
    complete_id: 1,
  },
  {
    Date: "03/09/2022",
    user_id: 10,
    car_id: 1,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 8,
    car_id: 4,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 9,
    car_id: 5,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 3,
    car_id: 6,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 4,
    car_id: 7,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 8,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 3,
    car_id: 9,
    complete_id: 0,
  },
  {
    user_id: 9,
    car_id: 11,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 3,
    car_id: 10,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 1,
    car_id: 2,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 10,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 5,
    car_id: 11,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 1,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 9,
    car_id: 1,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 1,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 7,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 4,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 1,
    car_id: 11,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 10,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 4,
    car_id: 10,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 5,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 5,
    car_id: 7,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 7,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 1,
    car_id: 1,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 7,
    car_id: 3,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 3,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 3,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 7,
    car_id: 1,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 4,
    car_id: 5,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 2,
    car_id: 8,
    complete_id: 0,
  },
  {
    Date: "03/02/2022",
    user_id: 9,
    car_id: 1,
    complete_id: 0,
  },
];

const seedSchedule = () => Schedule.bulkCreate(scheduledata);

module.exports = seedSchedule;
