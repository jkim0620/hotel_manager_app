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

// controller.show = (req, res) => {
//   Hotel
//   .findByID(req.params.id)
//   .then((students_data) => {
//     res.render("houses/houses_show.ejs", {
//       id: req.params.id,
//       students: students_data
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }

module.exports = controller;
