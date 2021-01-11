import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";
import * as variables from './config/variables';
import store from "./redux/store";
import AppRouting from "../src/route/app.route";

import "./helper/customIcons";
import "uikit/dist/css/uikit.min.css";
import './asset/styles/style.scss';

const App = () => (
  <ReduxProvider store={store}>
    <AppRouting />
    <ToastContainer
      position={toast.POSITION.BOTTOM_LEFT}
      autoClose={variables.TOAST.AUTO_CLOSE_TIME}
      hideProgressBar={false}
      limit={variables.TOAST.LIMIT}
      transition={Slide}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </ReduxProvider>
);

const renderDOM = () => (
  ReactDOM.render(<App />, document.getElementById('root'))
);

renderDOM();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
