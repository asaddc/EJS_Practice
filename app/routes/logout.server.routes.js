module.exports = (app) => {
  //load the controller(s)
  const logoutController = require("../controllers/logout.server.controller");

  app.get("/logout", (req, res) => {
    logoutController.logout(req, res);
  });
};
