import { fetchOneArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Vote from "./Vote";

function Article() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [votes, setVotes] = useState(0);
  // console.log(article);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchOneArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setVotes(articleFromApi.votes);
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
        <h3 className="article-votes">Votes: {votes}</h3>
        <Vote votes={votes} setVotes={setVotes} article_id={article_id}></Vote>
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
      <div>
        <Comments article_id={article_id}></Comments>
      </div>
    </>
  );
}

export default Article;
