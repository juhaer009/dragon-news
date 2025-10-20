import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 p-4 gap-3">
      <p className="text-xl text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex items gap-4" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          molestias reprehenderit quae. Illum accusamus, dolor animi ad tempora
          provident ex?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          molestias reprehenderit quae. Illum accusamus, dolor animi ad tempora
          provident ex?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          molestias reprehenderit quae. Illum accusamus, dolor animi ad tempora
          provident ex?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          molestias reprehenderit quae. Illum accusamus, dolor animi ad tempora
          provident ex?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
