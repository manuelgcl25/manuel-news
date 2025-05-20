import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles()
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2>Articles</h2>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default Articles;
