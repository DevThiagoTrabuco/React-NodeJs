import {
  ArticleBanner,
  ArticleBody,
  ArticleContainer,
  ArticleTitle,
} from "./ArticleStyled";

export function Article({ title, text, banner }) {
  return (
    <ArticleContainer>
      <ArticleBanner src={banner} alt={title} />
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleBody>{text}</ArticleBody>
    </ArticleContainer>
  );
}
