import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";
import * as variables from './config/variables';
import store from "./redux/store";
import {setIsBest} from './redux/action/general.action';
import {getPath} from "./helper/functions";
import AppRouting from "./route/app.route";
import history from './helper/history';

import "./helper/customIcons";
import "uikit/dist/css/uikit.min.css";
import "react-toastify/dist/ReactToastify.css";
import './asset/styles/style.scss';

const App = () => (
  <ReduxProvider store={store}>
    <AppRouting />
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
    />
  </ReduxProvider>
);

const renderDOM = () => (
  ReactDOM.render(<App />, document.getElementById('root'))
);

const isBest = getPath().includes(variables.PAGE.GOOD_CASE.VALUE);
store.dispatch(setIsBest(isBest));
history.replace(variables.PAGE.HOME.VALUE);
renderDOM();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
