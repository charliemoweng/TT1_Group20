module.exports = (sequelize, DataTypes) => {
  const Itinerary = sequelize.define("Itinerary", {
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'countries',
        key: 'id',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    budget: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    title: {
      type: DataTypes.FLOAT,
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

sequelize.sync().then(() => {
  console.log('Itinerary table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});
