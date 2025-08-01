import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getNews } from "../../services/newsService";
import { ContainerResults, SearchNews, SearchResults } from "./SearchStyled";
import { Card } from "../../components/Card/Card";

export function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  async function search() {
    try {
      const newsFound = await getNews(title);
      setNews(newsFound.data.foundNews);
    } catch (err) {
      console.log(err.message);
      setNews([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <SearchResults>
        <span>
          {news.length
            ? `Foram encontrados: ${news.length}
                      ${news.length > 1 ? "resultados" : "resultado"} 
                      para: `
            : "Nenhum resultado encontrado para: "}
        </span>
        <h2>{title}</h2>
      </SearchResults>
      <SearchNews>
        {news.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
          />
        ))}
      </SearchNews>
    </ContainerResults>
  );
}
