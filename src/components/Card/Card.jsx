import { Link } from "react-router";
import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardHeader } from "./CardStyled";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { Delete } from "../Modal/Delete/Delete";

export function Card({
  last,
  title,
  text,
  banner,
  actions = false,
  id,
  onNewsDeleted,
}) {
  const { user } = useContext(UserContext);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const openDeleteModal = () => setDeleteModalOpen(true);
  const closeDeleteModal = () => setDeleteModalOpen(false);

  return (
    <>
      <CardContainer>
        <CardBody>
          <div>
            <CardHeader $last={last}>
              {actions && (
                <span>
                  <Link to={`/manager/edit/${id}`}>
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <i
                    className="bi bi-trash3-fill"
                    onClick={openDeleteModal}
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
              )}
              {user && id ? (
                <Link
                  to={`/post/${id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h2>{title}</h2>
                </Link>
              ) : (
                <h2>{title}</h2>
              )}
              <TextLimit text={text} limit={last ? 300 : 100} />
            </CardHeader>
          </div>
          <img src={banner} alt="" />
        </CardBody>
      </CardContainer>
      <Delete
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onNewsDeleted={onNewsDeleted}
        newsId={id}
        newsTitle={title}
      />
    </>
  );
}
