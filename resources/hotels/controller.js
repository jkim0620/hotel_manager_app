const Hotel = require("../../models/hotel");

let controller = {};

controller.index = (req, res) => {
  Hotel
  .findAll()
  .then((hotels) => {
    res.render("hotels/hotels.ejs", {
      hotels: hotels
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

controller.indexNew = (req, res) => {
  res.render("hotels/new.ejs");
}

controller.create = (req, res) => {
  Hotel
  .save(req.body.hotel)
  .then(() => {
    res.redirect("/");
  })
  .catch((err) => {
    console.log(err);
  });
}


module.exports = controller;
