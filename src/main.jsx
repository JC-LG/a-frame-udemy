import './style.css';

import 'aframe';
import 'aframe-event-set-component';
import 'aframe-mouse-cursor-component';

import React from 'react';
import ReactDOM from 'react-dom/client';


import { ApplicationContextProvider } from './application/context/application-context';
import { Router } from './router/router';

import './style.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <ApplicationContextProvider>
            <Router />
        </ApplicationContextProvider>
    </React.StrictMode>
);

