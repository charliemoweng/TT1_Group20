module.exports = (sequelize, DataTypes) => {
  const Itinerary = sequelize.define("Itinerary", {
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
  Itinerary.associate = (models) => {
    Itinerary.hasMany(models.ItineraryDestination, {
      onDelete: "cascade",
    });
  };
  return Itinerary;
};
