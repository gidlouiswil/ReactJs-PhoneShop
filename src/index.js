import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './ProductList';

import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ProductList/>, document.getElementById('root'));

registerServiceWorker();
