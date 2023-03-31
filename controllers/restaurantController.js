const Restaurants = require("../model/restaurants");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.find();
    res.status(200).json({ success: true, message: restaurants });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
const createRestaurants = async (req, res) => {
  const { name, lon, lat } = req.body;
  console.log(req.body);
  try {
    const restaurant = await Restaurants.create({
      name,
      location: { coordinates: [lon, lat] },
    });
    res.status(200).json({ success: true, message: restaurant });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const getNearBranch = async (req, res) => {
  console.log("POST");
  const { lon, lat } = req.body;
  const { distance } = req.query;

  console.log("POS-LON", lon);
  console.log("POS-LAT", lat);
  console.log("POS-LAT", req.query);

  try {
    const branches = await Restaurant.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: [lon, lat] },
          $maxDistance: distance,
        },
      },
    });
    res.status(200).json({ success: true, branches });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ success: false, message: error });
  }
};

module.exports = { getRestaurants, createRestaurants, getNearBranch };
