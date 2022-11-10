import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MAIN_ROUTE, navbarRoutes } from "../routes";

const AppRouter: FC = () => {
  return (
    <Switch>
      {navbarRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
