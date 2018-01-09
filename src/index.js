import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
