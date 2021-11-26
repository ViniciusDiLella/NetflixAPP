import { Redirect, useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useToken } from "../../providers/UserToken";
import { jwtapi } from "../../utils/api";
import { Button, TextField } from "@material-ui/core";
import { RegisterContainer, RegisterDiv, RegisterForm } from "./styles";

const formSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório!"),
  email: yup.string().required("Campo obrigatório!").email("Email inválido!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(6, "Mínimo de 6 dígitos!"),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório!")
    .oneOf([yup.ref("password")], "As senhas estão diferentes."),
});

const RegisterBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { userToken } = useToken();

  const history = useHistory();

  const onSubmitFunction = ({ username, email, password }) => {
    const user = { username, email, password };

    jwtapi
      .post("/users/", user)
      .then(() => history.push("/signin"))
      .catch(() => toast.error("Este nome de usuário já está em uso!"));
  };

  if (userToken) {
    return <Redirect to="/dashboard" />;
  }
  const style = {
    border: " 1px #555 solid",
    backgroundColor: "white",
    width: "100%",
    borderRadius: "1px",
    margin: "10px",
  };
  return (
    <RegisterContainer>
      <RegisterDiv>
        <h1>Cadastro</h1>
        <RegisterForm onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            id="filled-basic"
            style={style}
            variant="filled"
            color="warning"
            type="username"
            placeholder="Nome de usuário"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
          <TextField
            style={style}
            variant="filled"
            color="warning"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <TextField
            style={style}
            variant="filled"
            color="warning"
            type="password"
            placeholder="Senha"
            {...register("password")}
            autoComplete="new-password"
          />
          <p>{errors.password?.message}</p>

          <TextField
            style={style}
            variant="filled"
            color="warning"
            type="password"
            placeholder="Confirmar senha"
            {...register("passwordConfirm")}
          />
          <p>{errors.passwordConfirm?.message}</p>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#e50914",
              width: "100%",
              color: "white",
              borderRadius: "1px",
              margin: "10px",
              padding: "15px",
              marginBottom: "30px",
            }}
            type="submit"
          >
            Cadastrar
          </Button>
        </RegisterForm>
      </RegisterDiv>
    </RegisterContainer>
  );
};

export default RegisterBar;
