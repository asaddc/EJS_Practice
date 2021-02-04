const session = require("express-session");

exports.renderCommentsView = (req, res) => {
  res.render("comments", { email: req.session.email });
};

exports.redirectToThankYou = (req, res) => {
  console.log(req.body);
  res.render("thankYou", req.body);
};
