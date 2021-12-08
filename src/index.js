import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import LoginStore from "./store/LoginStore";


export const Context = createContext(null)
export const login = new LoginStore()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>

            <Context.Provider value = {{
                login: login,
            }}>
                <App/>
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

