import styled from "styled-components";

export const SignInSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  p {
    color: #555;
    font-size: 0.9rem;

    span {
      color: #007bff;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
