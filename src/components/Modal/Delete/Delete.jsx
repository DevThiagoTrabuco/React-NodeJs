import { deleteNews } from "../../../services/newsService";
import { Button } from "../../Button/Button";
import { Modal } from "../Modal";
import { DeleteActions, DeleteContainer } from "./DeleteStyled";

export function Delete({ isOpen, onClose, onNewsDeleted, newsId, newsTitle }) {
  async function handleDelete() {
    try {
      await deleteNews(newsId);
      if (onNewsDeleted) {
        onNewsDeleted();
      }
      onClose();
    } catch (err) {
      console.error("Erro ao deletar notícia:", err);
      onClose();
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <DeleteContainer>
        <h2>Confirmar Exclusão</h2>
        <p>
          Você tem certeza que deseja excluir a notícia "
          <strong>{newsTitle}</strong>"?
        </p>
        <DeleteActions>
          <Button text="Cancelar" onClick={onClose} />
          <Button text="Excluir" onClick={handleDelete} />
        </DeleteActions>
      </DeleteContainer>
    </Modal>
  );
}
