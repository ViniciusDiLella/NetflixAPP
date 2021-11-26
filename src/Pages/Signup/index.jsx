import HomeHeader from "../../components/HomeHeader";
import RegisterBar from "../../components/RegisterBar";
import { RegisterPage } from "./styles";

const Signup = () => {
  return (
    <RegisterPage>
      <HomeHeader login={true}></HomeHeader>
      <RegisterBar></RegisterBar>
    </RegisterPage>
  );
};

export default Signup;
