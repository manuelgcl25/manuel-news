import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://manuels-nc-news.onrender.com/api/",
});

const fetchAllArticles = () => {
  return newsApi.get("/articles").then((response) => {
    // console.log(response.data);
    return response.data.articles;
  });
};

export { fetchAllArticles };
