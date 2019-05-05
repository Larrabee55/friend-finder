module.exports = function (app) {

  var path = require("path");
  // route when the user loads up the page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });
  // route when they click on the survey button
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))

  });
}