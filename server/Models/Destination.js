module.exports = (sequelize, DataTypes) => {
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
  });
  Destination.associate = (models) => {
    Destination.hasMany(models.ItineraryDestination, {
      onDelete: "cascade",
    });
  };
  return Destination;
};
