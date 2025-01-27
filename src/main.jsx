import './style.css';

import 'aframe';
import 'aframe-extras';
import 'aframe-blink-controls';
import 'aframe-event-set-component';
import 'aframe-mouse-cursor-component';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApplicationContextProvider } from './application/context/application-context';
import { Router } from './router/router';

import './style.css';
import {injectScript} from "./application/utils/dom.js";

const HANDY_WORK_CDN_URL =  'https://cdn.jsdelivr.net/npm/handy-work@3.1.11/build/handy-controls.min.js';
injectScript({
    // src: `${HANDY_WORK_CDN_URL}?pulled=${Date.now()}`,
    src: HANDY_WORK_CDN_URL,
    attributes: { defer: true }
});

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <ApplicationContextProvider>
            <Router />
        </ApplicationContextProvider>
    </React.StrictMode>
);

