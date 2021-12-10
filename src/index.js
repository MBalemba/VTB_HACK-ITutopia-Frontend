import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/VTBGroupUI-Regular/VTBGroupUI-Regular_stylesheet.css'
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import LoginStore from "./store/LoginStore";
import AdminStore from "./store/AdminStore";
import UserStore from "./store/UserStore";
import {blablabla} from "./http/UserApi";


export const Context = createContext(null)
export const login = new LoginStore();
export const admin = new AdminStore();
export const user = new UserStore();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>

            <Context.Provider value = {{
                login: login,
                admin: admin,
                user: user,
            }}>
                <App/>
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


window.balblabla = blablabla

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

