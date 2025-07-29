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

const fetchOneArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    console.log(response.data);
    return response.data.articles[0];
  });
};

export { fetchAllArticles, fetchOneArticle };
