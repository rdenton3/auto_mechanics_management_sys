// import all models
const Customer = require('./Customer');
const User = require('./User');
const Repairs = require('./Repairs');
const Schedule = require('./Schedule');
const Cars = require('./Cars');

// create associations
User.hasMany(Cars, {
  foreignKey: 'user_id'
});

Cars.hasMany(Repairs, {
  foreignKey: 'car_id'
});


Repairs.belongsTo(Car, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User.belongsToMany(Schedule, {
//   // through: Vote,
//   // as: 'voted_posts',

//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });


Cars.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


User.hasMany(Repairs, {
  foreignKey: 'user_id'
});



module.exports = { User, Customer, Repairs, Schedule, Cars };
