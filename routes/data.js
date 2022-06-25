const express = require("express");
const router = express.Router();

const {
  getAllData,
  getDataById,
  updateData,
  deleteData,
} = require("../controllers/data");

router.route("/").get(getAllData);
router.route("/:id").get(getDataById);
router.route("/").put(updateData);
router.route("/").delete(deleteData);

module.exports = router;
