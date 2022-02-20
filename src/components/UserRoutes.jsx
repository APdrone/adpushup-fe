import { Switch, Route, Redirect } from "react-router-dom";
import ConfirmationBox from "./ConfirmationBox";
import Dashboard from "./Dashboard";
import Userform from "./Userform";

const UserRoutes = () => {
  return (
    <Switch>
      <Route path="/submit" component={Userform} />
      <Route path="/home" component={Dashboard} />
      {/* <Route path="/success" component={ConfirmationBox} /> */}
      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default UserRoutes;
