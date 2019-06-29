// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the burgers as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/burgers", function(req, res) {});
};
