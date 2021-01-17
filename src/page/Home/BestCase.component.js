import React from 'react';
import {Link} from "react-router-dom";

import './Home.style.scss';

export default (props) => (
  <section className="padding__horizontal__30 height__expand flex__center__vertical">
    <div className="uk-grid-small uk-child-width-1-2 flex-1 cards" uk-grid="true">
      {
        props.menus.map((menu, index) => (
          <div key={`menu-${index}`}>
            <Link to={`/${menu.href}`} className={`home-card home-card-${menu.color}`}>
              <figure className="home-card-icon"><img src={menu.icon} alt=""/></figure>
              <h4 className="text__white text__center margin__top__25">{menu.name}</h4>
            </Link>
          </div>
        ))
      }
    </div>
  </section>
)
