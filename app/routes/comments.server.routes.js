module.exports = (app) => {
  //load the controller(s)
  var commentsController = require("../controllers/comments.server.controller");

  app.post("/comment", (req, res) => {
    //use the controller function
    commentsController.redirectToThankYou(req, res);
  });
};
