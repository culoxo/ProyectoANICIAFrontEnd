import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import {
  RouterProvider
} from "react-router-dom";
import * as routes from "../routes";
import {
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { GetRoutes } from "../utils/RouteUtils";
import Login from "../views/admin-users/Login"
import React, { Component } from "react";


class App extends Component {
  state = {
    isLoggedIn: false
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state;

    const router = createBrowserRouter(
      createRoutesFromElements(
        [routes.privateDashboardRoutes].map((route, key) => GetRoutes(route, key))
      )
    );

    return (
      <>
        <NotificationContainer />
        {isLoggedIn ? (
          <RouterProvider router={router} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </>
    );
  }
}

export default App;
