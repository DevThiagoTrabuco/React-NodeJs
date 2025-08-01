import { ModalBody, ModalContainer, ModalOverlay } from "./ModalStyled";

export function Modal({ isOpen, children, onClose }) {
  if (isOpen) {
    return (
      <ModalOverlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalBody>{children}</ModalBody>
        </ModalContainer>
      </ModalOverlay>
    );
  }

  return null;
}
