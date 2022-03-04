const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

// the home page is generic and will be shown to everyone
// need to either login or signup
router.get('/', (req, res) => {
      res.render('home');
    });

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;
