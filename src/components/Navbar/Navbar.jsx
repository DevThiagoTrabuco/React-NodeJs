import { Link, useNavigate } from "react-router";
import logo from "../../images/image.png";
import {
  ErrorSpan,
  ImgLogo,
  InputSpace,
  Nav,
  UserLoggedSpace,
} from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { searchSchema } from "../../schemas/searchSchema";
import { userLog } from "../../services/userService";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../../context/UserContext";
import { Modal } from "../Modal/Modal";
import { SignIn } from "../Modal/SignIn/SignIn";
import { SignUp } from "../Modal/SignUp/SignUp";

export function Navbar() {
  const [modalView, setModalView] = useState("closed"); // "closed", "signIn", "signUp"
  function openLoginModal() {
    setModalView("signIn");
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  async function findUser() {
    try {
      const response = await userLog();
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAuthSuccess() {
    await findUser();
    setModalView("closed");
  }

  function signOut() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  }

  useEffect(() => {
    if (Cookies.get("token")) findUser();
  });

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace className="input-search-space">
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise uma notícia"
            />
          </InputSpace>
        </form>

        <Link to="/">
          <ImgLogo src={logo} alt="Logo do app" />
        </Link>

        {user ? (
          <UserLoggedSpace>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <h2>{user.name}</h2>
            </Link>
            <i className="bi bi-box-arrow-right" onClick={signOut}></i>
          </UserLoggedSpace>
        ) : (
          <Button type="button" text="Entrar" onClick={openLoginModal} />
        )}
        <Modal
          isOpen={modalView !== "closed"}
          onClose={() => setModalView("closed")}
        >
          {modalView === "signIn" && (
            <SignIn
              onSuccess={handleAuthSuccess}
              onSwitchToSignUp={() => setModalView("signUp")}
            />
          )}
          {modalView === "signUp" && (
            <SignUp
              onSuccess={handleAuthSuccess}
              onSwitchToSignIn={() => setModalView("signIn")}
            />
          )}
        </Modal>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
    </>
  );
}
