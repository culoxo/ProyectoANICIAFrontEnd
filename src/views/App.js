import { Component } from "react";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import * as routes from "../routes";
import { GetRoutes } from "../utils/RouteUtils";
import Login from "../views/admin-users/Login";

class App extends Component {
  state = {
    isLoggedIn: false,
    usuarioRegistrado: null, // Agrega una propiedad para almacenar la información del usuario
  };

  handleLogin = (usuarioRegistrado) => {
    this.setState({
      isLoggedIn: true,
      usuarioRegistrado,
    });
  };

  render() {
    const { isLoggedIn, usuarioRegistrado } = this.state;

    const router = createBrowserRouter(
      createRoutesFromElements(
        [routes.privateDashboardRoutes].map((route, key) =>
          GetRoutes(route, key, usuarioRegistrado)
        )
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
