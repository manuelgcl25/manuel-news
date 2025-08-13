import { updateArticleVotes } from "../api";
import React from "react";
import { useState } from "react";

function Vote({ article_id, votes, setVotes }) {
  const [upvoteButton, setUpvoteButton] = useState("Upvote");

  const handleUpvote = () => {
    setVotes(votes + 1);
    updateArticleVotes(article_id, 1);
    setUpvoteButton("Upvoted");
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
    updateArticleVotes(article_id, -1);
  };

  return (
    <>
      <div className={upvoteButton}>
        <button onClick={handleUpvote}>{upvoteButton}</button>
      </div>
      <br />
      <div className="downvote">
        <button onClick={handleDownvote}>Downvote</button>
      </div>
    </>
  );
}

export default Vote;
