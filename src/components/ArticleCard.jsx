import React from "react";
function ArticleCard({ article }) {
  return (
    <li className="article">
      <span className="article-title">{article.title}</span>
      <img
        className="article-image"
        src={article.article_img_url}
        alt="article-img"
      />
    </li>
  );
}

export default ArticleCard;
