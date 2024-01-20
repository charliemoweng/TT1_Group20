import { DataTypes } from "sequelize";
import sequelize from "../Sequelize.js";

const Itinerary = sequelize.define("Itinerary", {
  countryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: DataTypes.FLOAT,
  title: DataTypes.STRING,
  destination: DataTypes.ARRAY(DataTypes.INTEGER),
});

sequelize.sync().then(() => {
  console.log('Itinerary table created successfully!');
}).catch((error) => {
  console.error('Unable to create Itinerary table : ', error);
});

export default Itinerary
