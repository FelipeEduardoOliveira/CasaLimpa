import React, { useState } from "react";
import {
  FormLoginContainer,
  FormLoginLogo,
  FormLoginTitleHeader,
  FormLoginForm,
  FormLoginInput,
  FormLoginRememberAndForgot,
  FormLoginButton,
  FormLoginDontHaveAccount,
  FormLoginRegisterButton,
} from "./FormLogin";
import { LogIn } from "../../Service/api";
import Swal from "sweetalert2";
import Logo from "../../assets/icons/dash.png";

function FormLogin() {
  const [rembember, setRemember] = useState(false);

  const log = (e) => {
    e.preventDefault();

    const email = e.target.username.value;
    const pass = e.target.password.value;

    if (email !== "" && pass !== "") {
      LogIn(email, pass)
        .then((response) => {
          if (response.code === "auth/invalid-email") {
            Swal.fire({
              icon: "warning",
              title: "Oops...",
              text: "Email nao cadastrado",
            });
          }
          if (response.code === "auth/wrong-password") {
            Swal.fire({
              icon: "warning",
              title: "Oops...",
              text: "Senha inválida",
            });
          }
          window.location = "/";
        })
        .catch((err) => {
          console.log(err.data.code);
        });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Revise todos os campos",
      });
    }
  };

  return (
    <FormLoginContainer>
      <FormLoginLogo>
        <img src={Logo} alt="Logo da empresa" />
      </FormLoginLogo>

      <FormLoginTitleHeader>
        <h1>Casa Limpa</h1>
        <p>Acesse a plataforma</p>
      </FormLoginTitleHeader>

      <FormLoginForm onSubmit={(e) => log(e)}>
        <FormLoginInput>
          <label>Username</label>
          <input type="text" placeholder="Enter username" id="username" />
        </FormLoginInput>

        <FormLoginInput>
          <label>password</label>
          <input type="password" placeholder="Enter password" id="password" />
        </FormLoginInput>

        {/* <FormLoginRememberAndForgot>
          <label>
            <input
              type="checkbox"
              id="remember"
              onClick={() => setRemember(!rembember)}
            />
            Remember me
          </label>
          <a>Forgot Password</a>
        </FormLoginRememberAndForgot> */}

        <FormLoginButton type="submit">Log in</FormLoginButton>
      </FormLoginForm>
      {/* <FormLoginRegisterButton onClick={() => alert("Register")}>
        Registrar
      </FormLoginRegisterButton> */}

      {/* <FormLoginDontHaveAccount>
        Don't have an account ? <a>Free Register</a>
      </FormLoginDontHaveAccount> */}
    </FormLoginContainer>
  );
}

export default FormLogin;
