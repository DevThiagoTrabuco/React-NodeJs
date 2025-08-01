import { useNavigate, useParams } from "react-router";
import { AddNewsContainer } from "./ManagerStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { newsSchema } from "../../schemas/newsSchema";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { createNews, editNews, getNewsById } from "../../services/newsService";
import { Button } from "../../components/Button/Button";
import { useEffect } from "react";

export function Manager() {
  const { action, id } = useParams();
  const navigate = useNavigate();

  const {
    register: registerNews,
    handleSubmit: handleRegisterNews,
    formState: { errors: errorsRegisterNews },
    setValue,
  } = useForm({ resolver: zodResolver(newsSchema) });

  async function registerNewsSubmit(data) {
    try {
      await createNews(data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  async function editNewsSubmit(data) {
    try {
      await editNews(data, id);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  async function findNewsById(id) {
    try {
      const { data } = await getNewsById(id);
      console.log(data);
      setValue("title", data.title);
      setValue("banner", data.banner);
      setValue("text", data.text);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (action === "edit") {
      findNewsById(id);
    }
  });

  return (
    <AddNewsContainer>
      <h2>{action === "add" ? "Adicionar" : "Editar"}</h2>
      <form
        onSubmit={
          action === "add"
            ? handleRegisterNews(registerNewsSubmit)
            : handleRegisterNews(editNewsSubmit)
        }
      >
        <Input
          type="text"
          placeholder="Título"
          name="title"
          register={registerNews}
        />
        {errorsRegisterNews?.title && (
          <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Link do Banner"
          name="banner"
          register={registerNews}
        />
        {errorsRegisterNews?.banner && (
          <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Texto da notícia"
          name="text"
          register={registerNews}
          isInput={false}
        />
        {errorsRegisterNews?.text && (
          <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
        )}

        <Button type="submit" text={action == "add" ? "Adicionar" : "Editar"} />
      </form>
    </AddNewsContainer>
  );
}
