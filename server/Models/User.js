import { DataTypes } from "sequelize";
import sequelize from "../Sequelize.js";
import Country from "./Country.js";
import Itinerary from "./Itinerary.js";
import Destination from "./Destination.js";
import ItineraryDestination from "./ItineraryDestination.js";

const User = sequelize.define("User", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
sequelize.sync().then(() => {
  console.log('User table created successfully!');
}).catch((error) => {
  console.error('Unable to create User table : ', error);
});
export default User;