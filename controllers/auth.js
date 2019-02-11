const parseCookies = require("../util/parseCookies");

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
  req.session.isLoggedIn = true;
  res.redirect("/");
};
