import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getNewsById } from "../../services/newsService";
import { Article } from "../../components/Article/Article";

export function Post() {
  const { id } = useParams();
  const [news, setNews] = useState({});

  async function findNews(id) {
    try {
      const response = await getNewsById(id);
      setNews(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    findNews(id);
  });

  return (
    <>
      <Article
        key={news.id}
        title={news.title}
        text={news.text}
        banner={news.banner}
      />
    </>
  );
}
