import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5">
      <h2 className="font-bold">Dragon News</h2>
      <div className="border-2 border-gray-200 p-8 space-y-3">
        <img src={news.image_url} alt="" />
        <p className="text-2xl font-semibold">{news.title}</p>
        <p>{news.details}</p>
        <Link to={`/category/${news.category_id}`} className="bg-secondary text-base-100 p-3 rounded-xl">All News in this Category</Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
