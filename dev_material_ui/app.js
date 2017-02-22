import AppBarP from './app-bar';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <AppBarP />,
    document.querySelector('.root')
);
