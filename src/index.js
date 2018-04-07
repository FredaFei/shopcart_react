import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import Route from './router/'
import '@/common/css/reset.css';

import store from '@/store/index.js'

const render = Component=>{
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    )
}

render(Route)
registerServiceWorker();
