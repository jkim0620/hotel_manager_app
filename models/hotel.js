const db = require("../config/database");

let Hotel = {};

Hotel.findAll = () => {
  return db.any(`SELECT * FROM hotels ORDER BY id DESC`);
}

// House.findByID = (id) => {
//   return db.manyOrNone(`SELECT name, img_url, fname, lname, image FROM houses INNER JOIN students ON houses.id = students.house_id WHERE houses.id = ${id}`);
// }

module.exports = Hotel;
