import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
    >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </DevSupport>
);
