import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <section>
        <div className="padding__horizontal__20 uk-child-width-1-4 uk-grid-small padding__vertical__10" uk-grid="true">
          <div className="">
            <div className="flex__center__horizontal margin__bottom__5">
              <i className="!text__xlarge icon-trash" />
            </div>
            <div className="flex__center__horizontal">
              <span className="margin__left__5 !font-bold">0</span>
              <span>کربوهیدرات</span>
            </div>
            <div className="flex__center__horizontal">
              <span className="margin__left__5 !font-bold">0</span>
              <span>کالری</span>
            </div>
          </div>
          <div className="">
             <div className="flex__center__horizontal margin__bottom__5">
              <i className="!text__xlarge icon-trash" />
            </div>
            <div className="flex__center__horizontal">
              <span className="margin__left__5 !font-bold">0</span>
              <span>قدم</span>
            </div>
            <div className="flex__center__horizontal">
              <span className="margin__left__5 !font-bold">02:00</span>
              <span>ساعت</span>
            </div>
          </div>
          <div className="">
             <div className="flex__center__horizontal margin__bottom__5">
              <i className="!text__xlarge icon-trash" />
            </div>
            <div className="flex__center__horizontal">
              <span className="!font-bold">0</span>
            </div>
            <div className="flex__center__horizontal">
              <span>داروی امروز</span>
            </div>
          </div>
          <div className="">
            <div className="flex__center__horizontal margin__bottom__5">
              <i className="!text__xlarge icon-trash" />
            </div>
            <div className="flex__center__horizontal">
              <span className="!font-bold">130</span>
            </div>
            <div className="flex__center__horizontal">
              <span>میانگین گلوکز</span>
            </div>
          </div>
        </div>
        <div className="background__muted padding__horizontal__20 padding__vertical__15 border__bottom border__top">
          <p className="text__medium !secondary-font-medium">1 برنامه دارویی</p>
        </div>
        <div className="background__muted padding__horizontal__20 padding__vertical__15 border__bottom">
          <p className="text__medium !secondary-font-medium">شنبه، ۲۱ دی ماه، ۱۳۹۹</p>
        </div>
        <div className="padding__horizontal__20">

        </div>
      </section>
    )
  }
}

export default Home;
