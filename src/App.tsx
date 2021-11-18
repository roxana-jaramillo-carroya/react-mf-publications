import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/menu/menu';
import LandingPublish from './views/landingPublish/landingPublish.view';

const HomeLazy = lazy(() => import('./app/Home'));
const AboutLazy = lazy(() => import('./app/About'));


export default ({ navigate }: { navigate: (route: string) => void }): JSX.Element => {
  return (
    <div className="app1">
      {/* <h1>Prueba WebComponents</h1>
      <cy-text class="cy-text-24 cy-text-center md:cy-text-left cy-text-CD-800 cy-font-medium">
        ¿Aun no sabes que vehículo quieres comprar?
      </cy-text>
      <cy-button type="primary" size="large" variant="" onClick={open}>
        <span className="cy-whitespace-nowrap cy-w-full">
          Publicar mi carro
        </span>
      </cy-button> */}
      <Menu />
      <LandingPublish />
      
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
