const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

// the home page is generic and will be shown to everyone
// need to either login or signup


router.get("/home", withAuth, (req, res) => {
    res.render("home", { layout: 'landing', loggedIn: req.session.loggedIn });
});

router.get("/", (req, res) => {
    res.render("login", { layout: 'login-signup' })
});

//MB create render login
router.get("/login", (req, res) => {
    res.render("login", { layout: 'login-signup' });
});

//MB create render login
router.get("/signup", (req, res) => {
    res.render("signup", { layout: 'login-signup' });
});

//MB create render status
router.get("/status", withAuth, (req, res) => {
    console.log("view status")
    res.render("status", { loggedIn: req.session.loggedIn });
});

//MB create render schedule
router.get("/schedule", withAuth, (req, res) => {
    res.render("schedule", { layout: 'schedule', loggedIn: req.session.loggedIn });
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