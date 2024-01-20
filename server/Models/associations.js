import Country from "./Country";
import Destination from "./Destination";
import Itinerary from "./Itinerary";
import ItineraryDestination from "./ItineraryDestination";
import User from "./User";

Country.hasMany(Itinerary, {
    onDelete: "cascade",
  });
Country.hasMany(Itinerary, {
onDelete: "cascade",
});
Country.hasMany(Destination, {
onDelete: "cascade",
});
Destination.hasMany(ItineraryDestination, {
    onDelete: "cascade",
});
User.hasMany(Itinerary, {
    onDelete: "cascade",
});