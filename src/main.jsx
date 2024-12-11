import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApplicationContextProvider } from './application/context/application-context';
import App from './application/application';

import './style.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <ApplicationContextProvider>
            <App />
        </ApplicationContextProvider>
    </React.StrictMode>
);

