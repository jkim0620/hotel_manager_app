const express = require("express");
const router = express.Router();

const controller = require("./controller.js");


router.get('/hotels/new', controller.indexNew);

router.get('/', controller.index);

router.post('/', controller.create);

module.exports = router;
