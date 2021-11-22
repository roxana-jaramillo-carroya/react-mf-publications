import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/menu/menu';
import Test from './components/test/Test';
import LandingPublish from './views/landingPublish/landingPublish.view';

const HomeLazy = lazy(() => import('./app/Home'));
const AboutLazy = lazy(() => import('./app/About'));


export default ({ navigate }: { navigate: (route: string) => void }): JSX.Element => {
  return (
    <div className="app1">

       <Menu />
      <LandingPublish /> 

      {/* <Test /> */}



      {/* <BrowserRouter>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Switch>
            <Route path="/about">
              <AboutLazy navigate={navigate} />
            </Route>
            <Route path="/">
              <HomeLazy navigate={navigate} />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter> */}
    </div>
  );
};
