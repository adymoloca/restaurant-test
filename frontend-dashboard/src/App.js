import React, { useState } from "react";
import "./App.css";
import AsideMenu from "./components/Others/AsideMenu/AsideMenu";
import Header from "./components/Others/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Clients from "./pages/Clients/Clients";
import Orders from "./pages/Orders/Orders";
import Users from "./pages/Users/Users";
import PushNotifications from "./pages/PushNotifications/PushNotifications";
import { createBrowserHistory } from "history";
import LoginPage from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import EmailSent from "./pages/EmailSent/EmailSent";
import Categories from "./pages/Settings/Categories/Categories";
import Cupons from "./pages/Settings/Cupons/Cupons";
import Extra from "./pages/Settings/Extra/Extra";
import Products from "./pages/Settings/Products/Products";
import Schedule from "./pages/Settings/Schedule/Schedule";
import Table from './pages/Settings/Table/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = (props) => {
  const history = createBrowserHistory();
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );


  

  return (
    <Router>
      {history.location.pathname === "/login" ||
        history.location.pathname === "/reset_password" ||
        history.location.pathname === "/email_sent" ? (
          <Switch>
            <Route path="/login">
              <LoginPage
                token={token}
                setToken={setToken}
                user={user}
                setUser={setUser}
              />
            </Route>
            <Route path="/reset_password">
              <ResetPassword token={token} setToken={setToken} />
            </Route>
            <Route path="/email_sent">
              <EmailSent token={token} setToken={setToken} />
            </Route>
          </Switch>
        ) : (
          <div>
            <div
              className="row"
              style={{ maxWidth: "100%", margin: "0px", padding: "0px" }}
            >
              <div className="col-2">
                <AsideMenu />
              </div>
              <div className="col-10" style={{ paddingRight: "0px" }}>
                <Header
                  user={user}
                  setUser={setUser}
                  token={token}
                  setToken={setToken}
                />
                <div className="row" style={{ maxWidth: "100%" }}>
                  <div className="col-12">
                    <Switch>
                      <Route path="/login">
                        <LoginPage token={token} setToken={setToken} />
                      </Route>
                      <Route path="/orders">
                        <Orders token={token} setToken={setToken} />
                      </Route>
                      <Route path="/clients">
                        <Clients token={token} setToken={setToken} />
                      </Route>
                      <Route path="/users">
                        <Users token={token} setToken={setToken} />
                      </Route>
                      <Route path="/notifications">
                        <PushNotifications token={token} setToken={setToken} />
                      </Route>
                      <Route path="/settings/categories">
                        <Categories token={token} setToken={setToken} />
                      </Route>
                      <Route path="/settings/cupons">
                        <Cupons token={token} setToken={setToken} />
                      </Route>
                      <Route path="/settings/extra">
                        <Extra token={token} setToken={setToken} />
                      </Route>
                      <Route path="/settings/products">
                        <Products token={token} setToken={setToken} />
                      </Route>
                      <Route path="/settings/schedule">
                        <Schedule token={token} setToken={setToken} />
                      </Route>
                      <Route path="/settings/table">
                        <Table token={token} setToken={setToken} />
                      </Route>
                      <Route path="/reset_password">
                        <ResetPassword token={token} setToken={setToken} />
                      </Route>
                      <Route path="/email_sent">
                        <EmailSent token={token} setToken={setToken} />
                      </Route>

                      <Route path="/">
                        <HomePage token={token} setToken={setToken} />
                      </Route>
                    </Switch>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        )}
    </Router>
  );
};

export default App;
