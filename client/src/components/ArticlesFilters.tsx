import { useState } from "react";

export default function ArticlesFilters({
  categories,
  setCurrentCategory,
}: {
  categories: string[];
  setCurrentCategory: (v: string) => void;
}) {
  const handleClick = (value: string) => setCurrentCategory(value);
  const [filterModale, setFilterModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setFilterModal(!filterModale)}
        className="fixed top-0 h-16 w-16 rounded bg-gray-300 text-xl border-4 border-slate-900 lg:hidden"
      >
        Filtres
      </button>
      <section
        className={`fixed top-[4.2rem] flex flex-col lg:relative lg:flex-row lg:justify-center lg:gap-4 lg:py-8 lg:top-0 transform duration-1000 ease-in-out ${filterModale ? "translate-x-0" : "lg:translate-x-0 -translate-x-full "}`}
      >
        <button
          type="button"
          onClick={() => handleClick("")}
          className="text-white bg-slate-800 p-4 max-w-36 min-w-36 rounded-md"
        >
          Tous les articles
        </button>
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => handleClick(c)}
            className="text-white bg-slate-800 p-4 max-w-36 min-w-36 rounded-md"
          >
            {c}
          </button>
        ))}
      </section>
    </>
  );
}
