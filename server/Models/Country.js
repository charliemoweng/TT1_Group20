module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("Country", {
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Country.associate = (models) => {
    Country.hasMany(models.Itinerary, {
      onDelete: "cascade",
    });
    Country.hasMany(models.Destination, {
      onDelete: "cascade",
    });
  };
  return Country;
};
