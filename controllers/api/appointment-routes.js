const router = require('express').Router();
const { User, Schedule, Car, Repairs } = require('../../models');
const withAuth = require('../../utils/auth');

// post request that allows user to create an appt
// creates the car, the repair needed and the appointment
router.post('/', withAuth, async (req, res) => {
    try {
        const carData = await Car.create({
            make: req.body.make,
            vin: req.body.vin,
            model: req.body.model,
            mileage: req.body.mileage,
            year: req.body.year,
            user_id: req.session.user_id
        })
        const scheduleData = await Schedule.create({
            Date: req.body.date,
            user_id: req.session.user_id,
        })
        const repairData = await Repairs.create({
            car_id: carData.id,
            user_id: req.session.user_id,
            item: req.body.repair,
            status_id: null
        })
        res.json({carData,scheduleData,repairData})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get request that allows user to see their upcoming appointments
router.get("/schedule", withAuth, (req, res) => {
    // find the appointments that match with the corresponding user id
    Schedule.findAll({
            where: {
                user_id: req.session.user_id
            }
        })
        // then pass appt into the template
        .then((apptData) => {
            //   if user doesnt have any cars, let them know
            if (!apptData) {
                // error message might be different from actually letting them know they dont have cars registered
                res
                    .status(404)
                    .json({ message: "You have not made any appointments yet" });
                return;
            }
            // serialize data before passing to template
            const appts = apptData.map((appt) => appt.get({ plain: true }));
            // res.json(appts);
            console.log(appts)
            res.render("show-appt", { appts, loggedIn: true });
            console.log("I ran")

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;