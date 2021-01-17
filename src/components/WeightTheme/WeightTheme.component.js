import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker2';
import {isEmpty, isFunction, jalaliDate} from "../../helper/functions";

import "./WeightTheme.style.scss"

const WeightTheme = React.forwardRef((props, ref) => {
  const [firstValue, setFirstValue] = useState("0");
  const [secondValue, setSecondValue] = useState("0");
  const date = jalaliDate(Date.now());

  useEffect(() => {
    const datepicker = document.getElementsByClassName('datepicker-input')[0];
    datepicker.addEventListener('focus', (e) => datepicker.blur());
  }, []);

  const handleFirstChange = ({target}) => {
    setFirstValue(target.value);
    props.onChangeFirst(!!+target.value ? target.value : '');
  };
  const handleSecondChange = ({target}) => {
    setSecondValue(target.value);
    props.onChangeSecond(!!+target.value ? target.value : '');
  };

  return (
    <section className="flex-1">
      <div className={`${!props.isBest ? "weight__header" : ""}`}>
        <div className="weight__input text__center padding__vertical__25 border__bottom">
          {
            isFunction(props.onChangeSecond) && (
              <div className="flex__column flex__center__horizontal">
                <input tabIndex="0" dir="ltr" type="tel" value={secondValue} onChange={handleSecondChange}/>
                <span className="input__description">{props.secondDescription}</span>
              </div>
            )}
          {isFunction(props.onChangeSecond) && <div className="input__separator">/</div>}
          <div className="flex__column flex__center__horizontal">
            <input tabIndex="1" ref={ref} dir="ltr" type="tel" value={firstValue} onChange={handleFirstChange}/>
            <span className="input__description">{props.firstDescription}</span>
          </div>
        </div>
        <div>
          {
            props.isBest ? (
              <React.Fragment>
                <div className="padding__vertical__15 border__bottom padding__horizontal__20">
                  <div className="flex__center__vertical ">
                    <span className="margin__left__15"><i className="icon-calendar !text__xlarge" /></span>
                    <span className="text__large">تاریخ</span>
                  </div>
                  <div className={`padding__top__5 ${props.isBest ? "best-datepicker" : ""}`}>
                    <DatePicker
                      onChange={value => console.log()}
                      isGregorian={false}
                      value={date}
                      timePicker={false}
                    />
                  </div>
                </div>
                <div className="padding__vertical__15 border__bottom padding__horizontal__20">
                  <div className="flex__center__vertical ">
                    <span className="margin__left__15"><i className="icon-clock-square !text__xlarge" /></span>
                    <span className="text__large">زمان</span>
                  </div>
                  <div className={`padding__top__5 ${props.isBest ? "best-datepicker" : ""}`}>
                    <span className="time">12:40</span>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div dir="ltr" className="padding__vertical__15 border__bottom padding__horizontal__20 flex__center__vertical">
                  <span className="margin__right__20"><i className="icon-calendar !text__xxlarge" /></span>
                  <DatePicker
                    onChange={value => console.log()}
                    isGregorian={false}
                    value={date}
                    timePicker={false}
                  />
                </div>
                <div dir="ltr" className="padding__vertical__15 border__bottom padding__horizontal__20 flex__center__vertical">
                  <span className="margin__right__20"><i className="icon-calendar !text__xxlarge" /></span>
                  <span className="time">12:40</span>
                </div>
              </React.Fragment>
            )
          }


        </div>
      </div>
    </section>
  )
});


export default WeightTheme;
