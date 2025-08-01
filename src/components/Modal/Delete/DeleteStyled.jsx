import styled from "styled-components";

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.3rem;
  text-align: center;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
`;

export const DeleteActions = styled.div`
  display: flex;
  gap: 1rem;

  button:last-child {
    background-color: #dc3545;
  }
`;
