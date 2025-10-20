import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id,data)

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredData);
    } else {
      const filteredData = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredData);
    }

    // console.log(filteredData)
  }, [data, id]);
  //   console.log(categoryNews)
  //   console.log(data)
  return (
    <div>
      <h2 className="font-bold">Dragon News Home</h2>
      {categoryNews.map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
