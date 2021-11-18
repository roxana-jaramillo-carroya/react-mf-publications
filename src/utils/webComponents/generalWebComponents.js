import {
  applyPolyfills as gbcApplyPolyfills,
  defineCustomElements as gbcDefineCustomElements,
} from 'general-web-components/loader';

gbcDefineCustomElements().then(() => gbcApplyPolyfills());
