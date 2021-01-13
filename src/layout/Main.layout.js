import React from "react";
import {withRouter} from "react-router-dom";

import style from "./Main.module.scss";

class MainLayout extends React.Component {


  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      console.log('Path changed')
    }
    return true;
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
