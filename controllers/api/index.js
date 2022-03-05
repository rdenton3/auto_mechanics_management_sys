const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const appointmentRoutes = require('./appointment-routes');
const statusRoutes = require('./status-routes');
const historyRoutes = require('./history-routes');

router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/status', statusRoutes);
router.use('/history', historyRoutes);

module.exports = router;
