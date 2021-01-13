import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => (
  <header className="padding__horizontal__20 padding__vertical__15 border__bottom background__muted flex__space-between flex__center__vertical">
    <Link to="/">
      <span className="flex__center__vertical">
        <i className="icon-arrow-right !text__xxlarge"/>
      </span>
    </Link>
    <span onClick={() => props.onAccept()} >
      <span className="flex__center__vertical">
        <i className="icon-check !text__xxlarge"/>
      </span>
    </span>
  </header>
);


export default Header;
