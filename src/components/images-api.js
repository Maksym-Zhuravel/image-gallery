import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "QLGrhpFuPQS90snYgs05KNQ37GlsBKcdPZS8FDietBg";

export const getImages = async (topic, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: topic,
      page: currentPage,
    },
  });
  return response.data.results;
};
