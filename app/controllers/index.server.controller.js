const commentsController = require("./comments.server.controller");

exports.displayInfo = (req, res) => {
  //get user input using request object
  var email = req.body.email;
  //make a reference to the session object
  var session = req.session;
  //store the username in session object
  session.email = email;
  console.log("email in session: " + session.email);
  //show the display.ejs page and pass username to it

  commentsController.renderCommentsView(req, res);
};

exports.renderIndex = (res, loginAttemptFailed) => {
  const viewData = {
    loginMessage: "Please login",
    headerMessage: "Login To Evaluate The Course:",
    loginAttemptFailed,
  };

  res.render("index", viewData);
};
