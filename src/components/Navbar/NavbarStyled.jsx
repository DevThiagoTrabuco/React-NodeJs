import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  /* position: fixed;
    top: 0; */
  background-color: white;
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ImgLogo = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  cursor: pointer;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

  button {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: #aaaaaa;
  }

  input {
    outline: none;
    border: none;
    background-color: #f5f5f5;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    width: 100%;

    &:focus {
      border: 1px solid #0bade3;
    }
  }
`;

export const ErrorSpan = styled.span`
  background-color: #ffcdcd;
  color: red;
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const UserLoggedSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 100%;

  h2 {
    font-size: 1.1rem;
    color: #0bade3;
    transition: all 0.3s ease-in-out;
  }

  h2:hover {
    color: #043546;
  }

  i {
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #0bade3;
  }

  i:hover {
    color: #043546;
  }
`;
