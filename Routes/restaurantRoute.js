const { Router } = require("express");
const {
  getRestaurants,
  createRestaurants,
  getNearBranch,
} = require("../controllers/restaurantController");

const router = Router();

router.route("/near").post(getNearBranch);
router.route("/").get(getRestaurants).post(createRestaurants);

module.exports = router;
