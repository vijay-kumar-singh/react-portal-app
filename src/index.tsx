import React from 'react';
import ReactDOM from 'react-dom';
import { ProductsProvider } from './store/context';
import { HashRouter as Router } from 'react-router-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<ProductsProvider>
    <Router>
        <App />
    </Router>
</ProductsProvider>, 
document.getElementById('root'));

serviceWorker.unregister();
