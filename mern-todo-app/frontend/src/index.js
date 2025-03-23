import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app"; 
import './scss/index.scss'
import { Provider } from "react-redux";
import store from "./stores/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
