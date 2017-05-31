const db = require("../config/database");

let Hotel = {};

Hotel.findAll = () => {
  return db.any(`SELECT * FROM hotels ORDER BY id DESC`);
}

Hotel.save = (hotel) => {
  return db.one(`
    INSERT INTO hotels (
      hotel_name,
      hotel_description,
      hotel_address,
      star_rating,
      pet_friendly,
      hotel_image_url
    ) VALUES (
      $/hotel_name/,
      $/hotel_description/,
      $/hotel_address/,
      $/star_rating/,
      $/pet_friendly/,
      $/hotel_image_url/
    )
    RETURNING *
  `, hotel);
}

module.exports = Hotel;
