import React from 'react';
import {jalaliDate} from "../helper/functions";

import style from './Main.module.scss';

// const date  = jalaliDate(Date.now());
const date  = "saeed"
export default (props) => (
  <section className="background__primary flex__column height__expand">
    <header className="padding__vertical__20 padding__horizontal__30">
      <div className="flex__center__vertical flex__space-between position__relative z-index-1">
        <div>
          <figure className={`avatar ${style.avatar_figure}`}>
            <i className="icon-user !text__bolder" />
          </figure>
        </div>
        <div className="text__white">
          <span><i className="icon-search !text__bolder" /></span>
          <span className="display__inline-flex margin__right__25"><i className="icon-priority !text__bolder" /></span>
        </div>
      </div>
      <div className="padding__top__20">
        <p className={`text__white ${style.date} text__bolder text__medium margin__bottom__5`}>۲۷ دی، ۱۳۹۹</p>
        <h4 className="margin__remove text__white !font-regular">سلام، حمیده!</h4>
      </div>
      <svg className={style.svg1} viewBox="0 0 1440 319">
        <path fill="#fff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
      <svg className={style.svg2} viewBox="0 0 1440 319">
        <path fill="#fff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </header>
    <div className={`${style.content} flex__column`}>
      {props.children}
    </div>
  </section>
)
