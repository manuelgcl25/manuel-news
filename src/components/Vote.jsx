import { updateArticleVotes } from "../api";
import React from "react";
import { useState } from "react";

function Vote({ article_id, votes, setVotes }) {
  const [isUpvoteClicked, setIsUpvoteClicked] = useState(false);
  const [isDownvoteClicked, setIsDownvoteClicked] = useState(false);
  const [upvoteButton, setUpvoteButton] = useState("Upvote");
  const [downButton, setDownButton] = useState("Downvote");

  // need to persist in the backend if it's upvoted or not so when we refresh the one article page it still reflects as upvoted/downvoted

  const handleUpvote = () => {
    if (isUpvoteClicked === false) {
      setUpvoteButton("Upvoted");
      setVotes(votes + 1);
      updateArticleVotes(article_id, 1);
      setIsUpvoteClicked(!isUpvoteClicked);
    } else {
      setUpvoteButton("Upvote");
      setVotes(votes - 1);
      updateArticleVotes(article_id, -1);
      setIsUpvoteClicked(!isUpvoteClicked);
    }
  };
  // need to persist in the backend if it's downvoted or not so when we refresh the one article page it still reflects as upvoted/downvoted
  const handleDownvote = () => {
    if (isDownvoteClicked === false) {
      setDownButton("Downvoted");
      setVotes(votes - 1);
      updateArticleVotes(article_id, -1);
      setIsDownvoteClicked(!isDownvoteClicked);
    } else {
      setDownButton("Downvote");
      setVotes(votes + 1);
      updateArticleVotes(article_id, +1);
      setIsDownvoteClicked(!isDownvoteClicked);
    }
  };

  return (
    <>
      <div>
        <button className={upvoteButton} onClick={handleUpvote}>
          {upvoteButton}
        </button>
      </div>
      <br />
      <div>
        <button className={downButton} onClick={handleDownvote}>
          {downButton}
        </button>
      </div>
    </>
  );
}

export default Vote;
