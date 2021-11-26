import { Button, TextField } from "@material-ui/core";
import { LoginForm, LoginMenu } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useToken } from "../../providers/UserToken";
import { Link, Redirect, useHistory } from "react-router-dom";
import { jwtapi } from "../../utils/api";

const formSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(6, "Mínimo de 6 dígitos!"),
});

const LoginBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { userToken, setUsername } = useToken();

  const history = useHistory();

  const onSubmitFunction = (data) => {
    setUsername(data.username);
    jwtapi
      .post("/sessions/", data)
      .then((response) =>
        localStorage.setItem(
          "@tokenKabit",
          JSON.stringify(response.data.access)
        )
      )
      .then(() => history.push("/dashboard"))
      .catch(() => toast.error("Usuário ou senha incorretos."));
  };

  if (userToken !== "") {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginMenu>
      <h1>Entrar</h1>
      <LoginForm onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          id="filled-basic"
          style={{
            backgroundColor: "#555",
            borderRadius: "5px",
            margin: "10px",
          }}
          {...register("username")}
          label="Email ou número de telefone"
          variant="filled"
          color="warning"
        />
        <p>{errors.username?.message}</p>
        <TextField
          id="filled-basic"
          style={{
            backgroundColor: "#555",
            borderRadius: "5px",
            margin: "10px",
          }}
          {...register("password")}
          label="Senha"
          variant="filled"
        />
        <p>{errors.password?.message}</p>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#e50914",
            color: "white",
            borderRadius: "5px",
            margin: "10px",
            padding: "15px",
            marginBottom: "30px",
          }}
          type="submit"
        >
          Entrar
        </Button>
      </LoginForm>
      <div style={{ color: "#666" }}>
        Novo por aqui?{" "}
        <Link style={{ textDecoration: "none", color: "white" }} to={"/signup"}>
          Assine agora
        </Link>
      </div>
    </LoginMenu>
  );
};

export default LoginBar;
