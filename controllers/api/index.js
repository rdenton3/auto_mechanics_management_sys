const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const appointmentRoutes = require('./appointment-routes');
const statusRoutes = require('./status-routes');

router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/status', statusRoutes);

module.exports = router;
