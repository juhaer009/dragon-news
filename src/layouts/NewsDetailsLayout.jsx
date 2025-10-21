import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayout/LeftAside";
import Header from "../Components/Header";
import RightAside from "../Components/homeLayout/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetailsLayout = () => {
  const [news, setNews] = useState([]);

  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const selectedNews = data.filter((news) => news.id == id);
    setNews(selectedNews);
  }, [data, id]);
//   console.log(news)
  return (
    <div className="w-11/12 mx-auto my-5">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-3.5">
        <div className="col-span-9">
          {news.map(singleNews => <NewsDetailsCard key={singleNews.id} news={singleNews}></NewsDetailsCard>)}
        </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetailsLayout;
