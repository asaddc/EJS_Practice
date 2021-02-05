module.exports = (app) => {
  //load the controller(s)
  const thankYouController = require("../controllers/comments.server.controller");

  app.get("/thankYou", (req, res) => {
    thankYouController.redirectToThankYou(req, res);
  });
};
