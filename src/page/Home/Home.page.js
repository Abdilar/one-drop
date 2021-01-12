import React from 'react';
import moment from 'moment';

import "./Home.style.scss";
import blood from '../../asset/images/blood.svg';
import running from '../../asset/images/running.svg';
import food from '../../asset/images/food.svg';
import medicin from '../../asset/images/medicin.svg';
import menu from '../../asset/images/menu.svg';
import scale from '../../asset/images/scale.svg';
import menuBlood from '../../asset/images/menu-blood.svg';
import menuRunning from '../../asset/images/menu-running.svg';
import stethoscope from '../../asset/images/stethoscope.svg';

class Home extends React.Component {
  state = {
    reports: [
      {
        value: "130/90",
        description: "سیستولیک / دیاستولیک",
        color: "red",
        size: "small"
      },
      {
        value: "500 میلی گرم",
        description: "مدفورمین",
        color: "orange",
        size: "large"
      },
      {
        value: "120",
        description: "دقیقه - متوسط",
        color: "blue",
        size: "medium"
      },
      {
        value: "5.8%",
        description: "A1C",
        color: "orange",
        size: "small"
      },
      {
        value: "130",
        description: "mg/dL",
        color: "cyan",
        size: "medium"
      },
      {
        value: "120",
        description: "دقیقه - متوسط",
        color: "red",
        size: "large"
      },
      {
        value: "130/90",
        description: "سیستولیک / دیاستولیک",
        color: "blue",
        size: "small"
      },
      {
        value: "130",
        description: "mg/dL",
        color: "cyan",
        size: "medium"
      }
    ],
    menus: [
      {
        name: 'وزن',
        icon: scale,
        color: 'blue'
      },
      {
        name: 'فشار خون',
        icon: stethoscope,
        color: 'green'
      },
      {
        name: 'فعالیت',
        icon: menuRunning,
        color: 'orange'
      },
      {
        name: 'گلوکز',
        icon: menuBlood,
        color: 'red'
      }
    ]
  };

  render() {
    return (
      <section className="flex__column height__expand">
        <div
          className="border__bottom padding__horizontal__20 uk-child-width-1-4 uk-grid-small padding__vertical__10 width__expand box__border"
          uk-grid="true">
          <div className="">
            <div className="flex__center__horizontal margin__bottom__10">
              <span>
                <img className="icon" src={food} alt="food"/>
              </span>
            </div>
            <div className="flex__center__horizontal margin__bottom__5">
              <span className="margin__left__5 !font-bold">0</span>
              <span>کربوهیدرات</span>
            </div>
            <div className="flex__center__horizontal">
              <span className="margin__left__5 !font-bold">0</span>
              <span>کالری</span>
            </div>
          </div>
          <div className="">
            <div className="flex__center__horizontal margin__bottom__10">
              <span>
                <img className="icon" src={running} alt="activity"/>
              </span>
            </div>
            <div className="flex__center__horizontal margin__bottom__5">
              <span className="margin__left__5 !font-bold">0</span>
              <span>قدم</span>
            </div>
            <div className="flex__center__horizontal">
              <span className="margin__left__5 !font-bold">02:00</span>
              <span>ساعت</span>
            </div>
          </div>
          <div className="">
            <div className="flex__center__horizontal margin__bottom__10">
              <span>
                <img className="icon" src={medicin} alt="drug"/>
              </span>
            </div>
            <div className="flex__center__horizontal margin__bottom__5">
              <span className="!font-bold">0</span>
            </div>
            <div className="flex__center__horizontal">
              <span>داروی امروز</span>
            </div>
          </div>
          <div className="">
            <div className="flex__center__horizontal margin__bottom__10">
              <span>
                <img className="icon" src={blood} alt="blood"/>
              </span>
            </div>
            <div className="flex__center__horizontal margin__bottom__5">
              <span className="!font-bold">130</span>
            </div>
            <div className="flex__center__horizontal">
              <span>میانگین گلوکز</span>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden">
          <div className="background__muted padding__horizontal__20 padding__vertical__15 border__bottom">
            <p className="text__medium !secondary-font-medium">1 برنامه دارویی</p>
          </div>
          <div className="background__muted padding__horizontal__20 padding__vertical__15 border__bottom">
            <p className="text__medium !secondary-font-medium">شنبه، ۲۱ دی ماه، ۱۳۹۹</p>
          </div>
          <div className="padding__horizontal__20">
            <ul className="padding__remove__horizontal padding__bottom__30">
              {
                this.state.reports.map((report, index) => (
                  <li key={`report-${index}`}
                      className="report__item uk-list padding__top__10 padding__bottom__5 flex__center__vertical">
                    <div className="flex__center__horizontal width-40 margin__left__15 padding__top__5">
                      <span className={`circle-${report.color} circle-${report.size} display__inline-block`}/>
                    </div>
                    <div className="flex-1">
                      <div className="flex__space-between flex__center__vertical">
                        <h5 className="margin__bottom__5 flex-1">{report.value}</h5>
                        <span>{moment().format('HH:MM')}</span>
                      </div>
                      <p className="!margin__remove__top">{report.description}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="padding__horizontal__20 padding__vertical__10 border__top">
          <span uk-toggle="target: #menu-bar">
            <img className="icon" src={menu} alt="menu"/>
          </span>
          <div id="menu-bar" className="uk-modal-full" uk-modal="true">
            <div className="uk-modal-dialog height__expand flex__end padding__bottom__80">
              <button className="uk-modal-close-full uk-close-large icon-close" type="button" uk-close="true"/>
              <div>
                <ul className="uk-list padding__remove__horizontal">
                  {
                    this.state.menus.map((menu, index) => (
                      <li key={`menu-${index}`} className={`padding__horizontal__10 ${!!index ? '!margin__top__15' : ''}`}>
                        <span className={`icon-menu icon-menu-${menu.color} uk-display-inline-block`}>
                          <img src={menu.icon} alt=""/>
                        </span>
                        <span className="!secondary-font-medium padding__right__15 text__medium text__bolder">{menu.name}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>


      </section>
    );
  }
}

export default Home;
