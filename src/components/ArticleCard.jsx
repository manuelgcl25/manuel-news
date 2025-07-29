import React from "react";
import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <li className="article">
      <Link className="nav-link" to={`/article/${article.article_id}`}>
        <span className="article-title">{article.title}</span>
        <img
          className="article-image"
          src={article.article_img_url}
          alt="article-img"
        />
      </Link>
    </li>
  );
}

export default ArticleCard;
