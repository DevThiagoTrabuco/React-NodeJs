import styled from "styled-components";

export const ContainerResults = styled.section`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }
`;

export const SearchNews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 1rem auto;
  width: 90%;
`;

export const SearchResults = styled.div`
  padding: 4rem;
  background-color: white;
  width: 80%;
  border-radius: 0%.3rem;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px;

  span {
    font-size: 1rem;
  }
`;
