import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

const routesBasedOnCodes = {
  CAS: "/casos",
  POP: "/poblacional",
  ADM: "/admin",
};

const getInitialRouteFromMap = (moduleCode) => {
  if (routesBasedOnCodes[moduleCode]) {
    return routesBasedOnCodes[moduleCode];
  }

  return null;
};

export const GetRoutes = (route, key) => {
  const { component, path, crumb, linkToGoBack } = route;

  return (
    <Route
      key={key}
      path={path}
      element={component}
      handle={{
        ...(linkToGoBack ? { getNavigateUrl: () => linkToGoBack } : {}),

        ...(crumb ? { crumb: (params) => crumb(params) } : {}),
      }}
    >
      {route.children?.map((route, key) => {
        return GetRoutes(route, key);
      })}
    </Route>
  );
};

export const GetInitialRedirectionBasedOnRoles = (me) => {
  console.log(me);

  let pathToRedirect = null;

  for (const authorization of me.authorizations) {
    const module = authorization.split("_")[1];

    const pathAux = getInitialRouteFromMap(module);

    if (pathAux && !pathToRedirect) {
      pathToRedirect = pathAux;
      break;
    }
  }

  return pathToRedirect;
};
