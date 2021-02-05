module.exports = (app) => {
  //load the controller(s)
  const commentsController = require("../controllers/comments.server.controller");

  app.get("/comment", (req, res) => {
    commentsController.renderCommentsView(req, res);
  });

  app.post("/comment", (req, res) => {
    //use the controller function
    commentsController.redirectToThankYou(req, res);
  });
};
