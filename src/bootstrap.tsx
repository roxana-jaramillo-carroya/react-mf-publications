import React from 'react';
import ReactDom from 'react-dom';
import './styles.scss';
import 'general-web-components/dist/ceet-carroya-frontend-web-components/ceet-carroya-frontend-web-components.css';
import './utils/webComponents/generalWebComponents';

import App from './App';

const mount = (el: Element, navigate: (route: string) => void): void => {
  ReactDom.render(<App navigate={ navigate } />, el);
};

//if (process.env.STANDALONE === 'true') {
  const standaloneRootEl = document.getElementById('standalone-root');
  //if (standaloneRootEl) {
    mount(standaloneRootEl, (route) => console.log(`Dispatched navigation to ${route}`));
  //}
//}

export { mount };
