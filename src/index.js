import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Counter from './Counter'

import ProductList from './containers/ProductListContainer';
import Cart from './components/Cart';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)
ReactDOM.render(<Provider store={store}>
    <div>
        <App></App>
    </div>
</Provider>, document.getElementById('root'));

registerServiceWorker();
