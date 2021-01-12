import React from "react";

import style from "./Main.module.scss";
import {withRouter} from "react-router-dom";

class MainLayout extends React.Component {

  componentDidMount() {
    document.body.classList.add("zoom");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      console.log('Path changed')
    }
    return true;
  }

  componentWillUnmount() {
    document.body.classList.remove("zoom");
  }

  render() {
    return (
      <React.Fragment>
        <div className={style.container}>
          <div className={style.container__wrapper} id="canvas-container">
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(MainLayout);
