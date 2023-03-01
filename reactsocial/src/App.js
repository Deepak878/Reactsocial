import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  console.log("user aaija", user);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/register" /> : <Login />}
        </Route>
        <Route path="/register">
          {" "}
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          {!user ? <Redirect to="/login" /> : <Profile />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
