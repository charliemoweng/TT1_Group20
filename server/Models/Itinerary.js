import { DataTypes } from "sequelize";
import sequelize from "../Sequelize.js";

const Itinerary = sequelize.define("Itinerary", {
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: DataTypes.FLOAT,
  title: DataTypes.STRING
});
Itinerary.associate = (models) => {
  Itinerary.hasMany(models.ItineraryDestination, {
    onDelete: "cascade",
  });
};

sequelize.sync().then(() => {
  console.log('Itinerary table created successfully!');
}).catch((error) => {
  console.error('Unable to create Itinerary table : ', error);
});

export default Itinerary
