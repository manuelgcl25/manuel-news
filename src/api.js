import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://manuels-nc-news.onrender.com/api/",
});

const fetchAllArticles = () => {
  return newsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

const fetchOneArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.articles[0];
  });
};

const fetchAllComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.articleComments;
  });
};

const updateArticleVotes = (article_id, inc_votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => {
      // console.log(response.data.article);
      return response.data.article;
    });
};

export {
  fetchAllArticles,
  fetchOneArticle,
  fetchAllComments,
  updateArticleVotes,
};
