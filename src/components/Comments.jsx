import { useEffect, useState } from "react";
import { fetchAllComments } from "../api";
import CommentCard from "./CommentCard";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  //   const { article_id } = useParams;

  useEffect(() => {
    setIsLoading(true);
    fetchAllComments(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
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

  if (isLoading || !comments) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default Comments;
