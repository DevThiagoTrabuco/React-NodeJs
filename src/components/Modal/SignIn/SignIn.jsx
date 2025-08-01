import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { signIn } from "../../../services/userService";
import { SignInSection } from "./SignInStyled";
import { signInSchema } from "../../../schemas/signInSchema.js"
import { ErrorSpan } from "../ModalStyled";

export function SignIn({ onSuccess, onSwitchToSignUp }) {
  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({ resolver: zodResolver(signInSchema) });

  async function inHandleSubmit(data) {
    try {
      const response = await signIn(data);
      Cookies.set("token", response.data, { expires: 1 });
      onSuccess?.();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SignInSection>
      <h2>Entrar</h2>
      <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          register={registerSignin}
        />
        {errorsSignin.email && (
          <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
        )}
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          register={registerSignin}
        />
        {errorsSignin.password && (
          <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
        )}
        <Button type="submit" text="Entrar" />
      </form>
      <p>
        Não tem uma conta? <span onClick={onSwitchToSignUp}>Cadastre-se</span>
      </p>
    </SignInSection>
  );
}
