import { useState } from "react";

function Vote({ article }) {
  console.log(article.votes);
  const [votes, setVotes] = useState(article.votes);
  const handleSubmit = () => {
    // event.preventDefault();
    setVotes(votes + 1);
  };

  //   const handleDownvote = () => {
  //     // event.preventDefault();
  //     setVotes(votes - 1);
  //   };

  return (
    <>
      <div className="upvote">
        <form onSubmit={handleSubmit}>
          <button type="submit">Upvote</button>
        </form>
      </div>

      {/* <div className="downvote">
        <form onHandleDownvote={handleDownvote}>
          <button type="submit">Downvote</button>
        </form>
      </div> */}
    </>
  );
}

export default Vote;
