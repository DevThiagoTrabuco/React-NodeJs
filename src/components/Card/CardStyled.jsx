import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  box-shadow: #32326926 0px 2px 5px 0px, #00000005 0px 1px 1px 0px;
  border-radius: 0.3rem;
  background-color: white;
`;
export const CardBody = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  img {
    width: 40%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0 0.3rem 0.3rem 0;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${(props) => (props.top ? "1.5rem" : ".8rem")};

  h2 {
    margin-bottom: 1rem;
    font-size: ${(props) => (props.top ? "3rem" : "1.5rem")};
    width: 100%;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  i {
    display: flex;
    justify-content: flex-end;
    color: #0bade3;
    font-size: 1.1rem;
    text-decoration: none;
    border: none;
  }
`;
