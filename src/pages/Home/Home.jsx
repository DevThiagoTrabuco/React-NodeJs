import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { getAllNews, getLastNews } from "../../services/newsService.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";

export function Home() {
  const [news, setNews] = useState([]);
  const [lastNews, setLastNews] = useState({});

  async function findNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);

    const lastNewsResponse = await getLastNews();
    setLastNews(lastNewsResponse.data.news);
  }

  useEffect(() => {
    findNews();
  }, []);

  return (
    <>
      <HomeHeader>
        {lastNews.id && (
          <Card
            last="true"
            id={lastNews.id}
            key={lastNews.id}
            title={lastNews.title}
            text={lastNews.text}
            banner={lastNews.banner}
          />
        )}
      </HomeHeader>
      <HomeBody>
        {news.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
          />
        ))}
      </HomeBody>
    </>
  );
}
