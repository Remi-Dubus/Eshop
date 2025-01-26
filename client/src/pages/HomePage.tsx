import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ArticlesFilters from "../components/ArticlesFilters";
import ArticlesList from "../components/ArticlesList";
import type { ArticleType } from "../lib/definitions";

function HomePage() {
  const articles: ArticleType[] = useLoaderData() as ArticleType[];

  const [currentCategory, setCurrentCategory] = useState<string>("");

  const categories: string[] = [...new Set(articles.map((a) => a.category))];

  return (
    <main className="bg-blue-300 py-28">
      <ArticlesFilters
        categories={categories}
        setCurrentCategory={setCurrentCategory}
      />
      <ArticlesList articles={articles} currentCategory={currentCategory} />
    </main>
  );
}

export default HomePage;
