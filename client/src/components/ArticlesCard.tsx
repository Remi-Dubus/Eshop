import { NavLink } from "react-router-dom";
import type { ArticleType } from "../lib/definitions";

export default function ArticlesCard({ article }: { article: ArticleType }) {
  return (
    <NavLink
      to={`/details/${article.id}`}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800"
    >
      <img
        className="w-full"
        src={article.picture_resized}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 max-h-32 min-h-32">
        <div className="font-bold text-xl mb-2 text-white max-h-16">
          {article.name}
        </div>
        <p className="text-white text-base">{article.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {article.category}
        </span>
      </div>
    </NavLink>
  );
}
