import sequelize from "../Sequelize.js";

const ItineraryDestination = sequelize.define("ItineraryDestination", {});

sequelize.sync().then(() => {
  console.log('ItineraryDestination table created successfully!');
}).catch((error) => {
  console.error('Unable to create ItineraryDestination table : ', error);
});

export default ItineraryDestination