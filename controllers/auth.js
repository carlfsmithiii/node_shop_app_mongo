const parseCookies = require("../util/parseCookies");
const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  const isLoggedIn = parseCookies(req.get("Cookie")).loggedIn;
  console.log(isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly");
  User.findById("5c5b51f129eca91a8d7d386d")
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect("/");
  });
};