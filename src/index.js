import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from './store/reducers/reducer';
import thunk from 'redux-thunk';

const logger = store =>{

    return next => {
        return action => {
            const result=next(action);
            return result;
        }
    };
}

const store = createStore(reducer,applyMiddleware(logger,thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
