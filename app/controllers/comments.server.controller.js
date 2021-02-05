const indexController = require("./index.server.controller");
const thankYouController = require("./thankYou.server.controller");

exports.renderCommentsView = (req, res) => {
  // if the user didn't login, then redirect back to comment.
  req.session.email
    ? res.render("comments", { email: req.session.email })
    : res.redirect("/");
};

exports.redirectToThankYou = (req, res) => {
  console.log(req.body);
  thankYouController.renderThankYouView(req, res);
};
