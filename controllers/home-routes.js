const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

// the home page is generic and will be shown to everyone
// need to either login or signup
router.get("/home", (req, res) => {
  res.render("home");
});

//MB create render login
router.get("/login", (req, res) => {
  res.render("login");
});

//MB create render login
router.get("/signup", (req, res) => {
  res.render("signup");
});

//MB create render status
router.get("/status", (req, res) => {
  res.render("status");
});

//MB create render schedule
router.get("/schedule", (req, res) => {
  res.render("schedule");
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});






module.exports = router;
