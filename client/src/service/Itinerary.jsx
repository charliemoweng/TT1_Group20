import axios from "axios";

export const createItinerary = async (body) => {
  console.log(body);
  const response = await axios.post(
    "http://localhost:21444/auth/v1/test",
    body
  );
  console.log("Response: " + response);
  if (response.status !== 200) {
    return null;
  }

  return response.data;
};

export const getDestinationByCountry = async (country) => {
  const destination = {
    Singapore: ["MBS", "USS", "RWS"],
    Malaysia: ["Kuala Lumpur", "Selangor", "Johor"],
    Korea: ["Itaewon", "Seoul"],
    Vietnam: ["HCM"],
  };
  try {
    const response = {
      destination: destination[country],
    };
    return response;
  } catch (error) {
    return;
  }
};
