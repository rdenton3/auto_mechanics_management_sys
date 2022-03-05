const router = require('express').Router();
const { User, Car, Repairs, Schedule } = require('../../models');
const withAuth = require('../../utils/auth');

// figure out what we want the histroy to look like? 
// show history of all previous appointments and then 
// when you click on the appt you can see what repairs have been done?
// or just see a history or all repairs done with the date

// show all cars that user has registered
// allow them to pick one car to view the history of 
router.get('/', withAuth, (req, res) => {
    // find user that matches with the corresponding id
    Repairs.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id,
      },
    //   include the Cars model to show all active cars registered to that user
      include: [
        {
          model: Car,
          attributes: ['model']
        }
      ]
    })
    // then pass cars into the template
      .then(carData => {
        //   if user doesnt have any cars, let them know
        if (!carData) {
            // error message might be different from actually letting them know they dont have cars registered
            res.status(404).json({ message: 'You have not yet registered any cars' });
            return;
          }
        // serialize data before passing to template
        // const cars = carData.cars.map(car => car.get({ plain: true }));
        const cars = carData.map((car) => car.get({ plain: true })); //mb added .cars
        // render the options status page ****** NEED TO PUDATE FILE NAME
        res.render('history', { cars, loggedIn: true });  //MB - changed to history
        // res.json(carData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// once user selects the car they want to view history for
// show them all repair details
// ***we only want to show users the cars that have a status id of finished though***
// only want to show past jobs because current repairs will be displayed on the status page
router.get('/:id', (req, res) => {
    Car.findOne({
      where: {
        id: req.params.id, 
        // is there a way to only pull for status ids that are true aka finished
        //MB - The schedule Completed_ind = true
        status_id: true
      },
      attributes: ['id','make','model','vin','year'],
      include: [
        {
            model: Repairs,
            attributes: ['id', 'status_id', 'item', 'created_at'],
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;