import styled from "styled-components";

export const FooterTop = styled.section`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.$isTop ? "translateY(0)" : "translateY(100%)"};

  p {
    font-family: "Google Sans Code";
    font-size: 1.2rem;
  }
`;

export const FooterBottom = styled.section`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Google Sans Code";
    font-size: 1.2rem;
  }
`;
