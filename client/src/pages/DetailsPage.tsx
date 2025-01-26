import { useLoaderData, useNavigate } from "react-router-dom";
import type { ArticleType } from "../lib/definitions";

function DetailsPage() {
  const article: ArticleType = useLoaderData() as ArticleType;

  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <main className="pb-28 bg-blue-300 flex flex-col items-center ">
      <h1 className="text-4xl text-center py-8">{article.name}</h1>
      <section className="flex flex-col lg:flex-row gap-12 justify-center p-8 bg-slate-800 lg:w-11/12 rounded-lg">
        <img src={article.picture_resized} alt={`${article.name}`} />
        <div className="flex flex-col items-center gap-12 text-2xl">
          <p className=" text-white">{article.description}</p>
          <button
            type="button"
            onClick={handleClick}
            className="bg-gray-200 p-4 w-fit rounded-md"
          >
            Retour
          </button>
        </div>
      </section>
    </main>
  );
}

export default DetailsPage;
