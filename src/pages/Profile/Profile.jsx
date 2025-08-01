import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileNews,
  ProfileUser,
} from "./ProfileStyled";
import { Card } from "../../components/Card/Card";
import { getNewsByUser } from "../../services/newsService";
import { Link } from "react-router";

export function Profile() {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  const findNewsByUser = useCallback(async () => {
    try {
      const response = await getNewsByUser();
      setNews(response.data.newsByUser);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      setNews([]);
    }
  }, []);

  useEffect(() => {
    findNewsByUser();
  }, [findNewsByUser]);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileBackground src={user.bg} alt="" />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="" />
          <h2>{user.name}</h2>
          <h2>{user.username}</h2>
        </ProfileUser>

        <ProfileActions>
          <Link to="/manager/add/news">
            <ProfileIconAdd>
              <i className="bi bi-plus-circle"></i>
            </ProfileIconAdd>
          </Link>
        </ProfileActions>
      </ProfileHeader>

      <ProfileNews>
        {news.length === 0 && <h3>Nenhuma notícia publicada</h3>}

        {news.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              actions={true}
              onNewsDeleted={findNewsByUser}
            />
          );
        })}
      </ProfileNews>
    </ProfileContainer>
  );
}
