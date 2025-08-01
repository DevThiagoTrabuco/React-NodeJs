import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
  z-index: 9999;
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.3rem;
  width: 30%;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorSpan = styled.span`
  background-color: #ffcdcd;
  color: red;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
`;
