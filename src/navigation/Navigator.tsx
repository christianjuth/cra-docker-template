import * as React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import { navigation } from '../constants';
import { NotFound } from '../pages';

export function Navigator() {
  return (
    <BrowserRouter>
      <Switch>
        {navigation.routes.map(({ path, component }) => (
          <Route 
            key={path}
            exact={true} 
            path={path} 
            component={component}
          />
        ))}
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export function useTitle() {
  const routeMatch = useRouteMatch();
  const routeMatchConfig = navigation.routes.filter(r => r.path === routeMatch.path);
  return routeMatchConfig.length > 0 ? routeMatchConfig[0].title : null;
}

export default Navigator;