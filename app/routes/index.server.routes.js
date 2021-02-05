module.exports = (app) => {
  //load the controller(s)
  var index = require("../controllers/index.server.controller");

  //handle the routing of get request to the route
  //by showing the login screen
  app.get("/", (req, res) => {
    //display login page
    index.renderIndex(res, false);
  });
  //the form uses a post request to the same path ('/')
  app.post("/", (req, res) => {
    //use the controller function
    index.displayInfo(req, res);
  });
};
