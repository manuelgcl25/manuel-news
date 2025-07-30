function CommentCard({ comment }) {
  return (
    <li className="article-comment">
      <h3>{comment.author}</h3>
      <h3>{comment.votes}</h3>
      <h3>{comment.body}</h3>
    </li>
  );
}

export default CommentCard;
