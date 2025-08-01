import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { signUp } from "../../../services/userService";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { SignUpSection } from "../SignUp/SignUpStyled";
import { signUpSchema } from "../../../schemas/signupSchema";
import { ErrorSpan } from "../ModalStyled";

export function SignUp({ onSuccess, onSwitchToSignIn }) {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  async function onSignupSubmit(data) {
    try {
      const response = await signUp(data);
      Cookies.set("token", response.data, { expires: 1 });
      onSuccess?.();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SignUpSection>
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmitSignup(onSignupSubmit)}>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          register={registerSignup}
        />
        {errorsSignup.name && (
          <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
        )}
        <Input
          type="email"
          placeholder="Email"
          name="email"
          register={registerSignup}
        />
        {errorsSignup.email && (
          <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
        )}
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          register={registerSignup}
        />
        {errorsSignup.password && (
          <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
        )}
        <Input
          type="password"
          placeholder="Confirmar Senha"
          name="confirmPassword"
          register={registerSignup}
        />
        {errorsSignup.confirmPassword && (
          <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
        )}
        <Button type="submit" text="Cadastrar" />
      </form>
      <p>
        Já tem uma conta? <span onClick={onSwitchToSignIn}>Entre</span>
      </p>
    </SignUpSection>
  );
}
