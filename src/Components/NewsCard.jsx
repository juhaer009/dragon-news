import { FaEye, FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline, IoStar } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 mb-3">
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm">
          <FaRegBookmark size={24} />
          <IoShareSocialOutline size={24} />
        </button>
      </div>

      <div className="px-4 py-2">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>

      <figure>
        <img
          src={thumbnail_url}
          alt="News thumbnail"
          className="w-[1000px] h-[262px] object-cover"
        />
      </figure>

      <div className="card-body">
        <p className="text-sm text-gray-600">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-primary font-medium cursor-pointer">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>

        <div className="flex items-center justify-between mt-3 text-sm">
          <div className="flex items-center space-x-2">
            <IoStar className="text-yellow-500"/>
            <span className="font-semibold">{rating.number}</span>
            <span className="badge badge-outline badge-sm">{rating.badge}</span>
          </div>

          <div className="flex items-center space-x-1 text-gray-600">
            <FaEye size={18} />
            <span> {total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
