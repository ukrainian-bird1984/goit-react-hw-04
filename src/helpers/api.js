import axios from "axios";

const MY_KEY = "jf5FmE9m_9LQ0aJzrC-o5gVrVhcv5o9Ti80JYT-Mg5Q";

export const requesForImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${MY_KEY}&query=${query}&per_page=12&page=${page}`
  );
  return response.data;
};