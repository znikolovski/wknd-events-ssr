/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Use polyfills for modern language features
// The imports and dependencies can be removed if only modern browsers should be
// supported
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'custom-event-polyfill';

import { Constants, ModelManager } from '@adobe/aem-spa-page-model-manager';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import AppPage from './components/Page/Page'
import './components/import-components';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  ModelManager.initialize().then(pageModel => {
    const history = createBrowserHistory();

    const targetView = function() {
      if (window) {
        var viewName = window.location.pathname; // or use window.location.pathName if router works on path and not hash

        console.log("View Name: " + viewName);

        viewName = viewName || 'home'; // view name cannot be empty

        // Sanitize viewName to get rid of any trailing symbols derived from URL
        if (viewName.startsWith('#') || viewName.startsWith('/')) {
            viewName = viewName.substr(1);
        }

        var adobe = window.adobe || {};

        // Validate if the Target Libraries are available on your website
        console.log("Check result: " + (typeof adobe != 'undefined' && adobe.target && typeof adobe.target.triggerView === 'function'));
        if (typeof adobe != 'undefined' && adobe.target && typeof adobe.target.triggerView === 'function') {
            adobe.target.triggerView(viewName);
        }
      }
    };

    history.listen(targetView);

    render(
      <Router history={history}>
        <App
          history={history}
          cqChildren={pageModel[Constants.CHILDREN_PROP]}
          cqItems={pageModel[Constants.ITEMS_PROP]}
          cqItemsOrder={pageModel[Constants.ITEMS_ORDER_PROP]}
          cqPath={pageModel[Constants.PATH_PROP]}
          locationPathname={window.location.pathname}
        />
      </Router>,
      document.getElementById('spa-root')
    );
  });
});
