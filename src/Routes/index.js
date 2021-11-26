import { BrowserRouter as Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

const RoutesPage = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};
export default RoutesPage;
