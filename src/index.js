import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Counter from './Counter'
import thunk from "redux-thunk";

import ProductList from './containers/ProductListContainer';
import Cart from './components/Cart';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
)

ReactDOM.render(<Provider store={store}>
    <div>
     <App></App>
    </div>
</Provider>, document.getElementById('root'));

registerServiceWorker();
