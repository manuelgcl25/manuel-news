import { fetchOneArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchOneArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading || !article) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div>
        <h1>{article.title}</h1>
      </div>
    </>
  );
}

export default Article;
