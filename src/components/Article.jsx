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

  const articleDate = article.created_at.slice(0, 10);

  return (
    <>
      <div>
        <h3 className="article-author">Author: {article.author}</h3>
        <h3 className="article-votes">Votes: {article.votes}</h3>
        <h3 className="article-topic">Topic: {article.topic}</h3>
        <h3 className="article-comment-count">
          Comments: {article.comment_count}
        </h3>
        <div>
          <main className="main-content">
            <article>
              <header>
                <h1 id="main-heading" type="headline">
                  <span role="text">{article.title}</span>
                </h1>
              </header>
            </article>
          </main>
        </div>
        <div>
          <img
            className="article-image"
            src={article.article_img_url}
            alt="article-img"
          />
          <div className="article-body">{article.body}</div>
        </div>
        <br />
        <text>Date: {articleDate}</text>
        <br />
      </div>
    </>
  );
}

export default Article;
