import styled from "styled-components";

export const ArticleContainer = styled.article`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 900px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ArticleBanner = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ArticleTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #222;
  margin: 0;
`;

export const ArticleBody = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  white-space: pre-wrap;
  text-align: justify;
`;
