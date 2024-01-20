import { DataTypes } from "sequelize";
import sequelize from "../Sequelize.js";

const Country = sequelize.define("Country", {
  countryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync().then(() => {
  console.log('Country table created successfully!');
}).catch((error) => {
  console.error('Unable to create Country table : ', error);
});

export default Country;

