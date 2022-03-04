const { Schedule } = require("../models");

const scheduledata = [
  {
    Date: "03/02/2022",
    user_id: 9,
    car_id: 19,
  },
  {
    Date: "03/02/2022",
    user_id: 1,
    car_id: 8,
  },
  {
    Date: "03/02/2022",
    user_id: 8,
    car_id: 12,
  },
  {
    Date: "03/02/2022",
    user_id: 8,
    car_id: 19,
  },
  {
    Date: "03/02/2022",
    user_id: 9,
    car_id: 3,
  },
  {
    Date: "03/02/2022",
    user_id: 3,
    car_id: 16,
  },
  {
    Date: "03/02/2022",
    user_id: 4,
    car_id: 7,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 7,
  },
  {
    Date: "03/02/2022",
    user_id: 3,
    car_id: 18,
  },
  {
    user_id: 9,
    car_id: 16,
  },
  {
    Date: "03/02/2022",
    user_id: 3,
    car_id: 17,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 2,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 10,
  },
  {
    Date: "03/02/2022",
    user_id: 5,
    car_id: 11,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 1,
  },
  {
    Date: "03/02/2022",
    user_id: 9,
    car_id: 18,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 15,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 7,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 4,
  },
  {
    Date: "03/02/2022",
    user_id: 1,
    car_id: 16,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 18,
  },
  {
    Date: "03/02/2022",
    user_id: 4,
    car_id: 10,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 5,
  },
  {
    Date: "03/02/2022",
    user_id: 5,
    car_id: 16,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 17,
  },
  {
    Date: "03/02/2022",
    user_id: 1,
    car_id: 15,
  },
  {
    Date: "03/02/2022",
    user_id: 7,
    car_id: 13,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 3,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 13,
  },
  {
    Date: "03/02/2022",
    user_id: 7,
    car_id: 1,
  },
  {
    Date: "03/02/2022",
    user_id: 4,
    car_id: 15,
  },
  {
    Date: "03/02/2022",
    user_id: 2,
    car_id: 18,
  },
  {
    Date: "03/02/2022",
    user_id: 9,
    car_id: 10,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 15,
  },
  {
    Date: "03/02/2022",
    user_id: 8,
    car_id: 1,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 8,
  },
  {
    Date: "03/02/2022",
    user_id: 2,
    car_id: 13,
  },
  {
    Date: "03/02/2022",
    user_id: 9,
    car_id: 20,
  },
  {
    Date: "03/02/2022",
    user_id: 1,
    car_id: 17,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 9,
  },
  {
    Date: "03/02/2022",
    user_id: 10,
    car_id: 3,
  },
  {
    Date: "03/02/2022",
    user_id: 5,
    car_id: 6,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 12,
  },
  {
    Date: "03/02/2022",
    user_id: 5,
    car_id: 2,
  },
  {
    Date: "03/02/2022",
    user_id: 6,
    car_id: 14,
  },
  {
    Date: "03/02/2022",
    user_id: 8,
    car_id: 18,
  },
  {
    Date: "03/02/2022",
    user_id: 3,
    car_id: 4,
  },
];

const seedSchedule = () => Schedule.bulkCreate(scheduledata);

module.exports = seedSchedule;
