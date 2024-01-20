import { DataTypes } from "sequelize";
import sequelize from "../Sequelize.js";

const Destination = sequelize.define("Destination", {
  cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  destinationName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT("medium"),
    allowNull: false,
  },
  countryName: DataTypes.STRING
});

sequelize.sync().then(() => {
  console.log('Destination table created successfully!');
}).catch((error) => {
  console.error('Unable to create Destination table : ', error);
});


export default Destination;
