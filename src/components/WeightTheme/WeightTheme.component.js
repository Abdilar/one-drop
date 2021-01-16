import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker2';
import {isEmpty, isFunction, jalaliDate} from "../../helper/functions";

import "./WeightTheme.style.scss"

const WeightTheme = (props) => {
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
      <div className="weight__header">
        <div className="weight__input text__center padding__vertical__25 border__bottom">
          <div className="flex__column flex__center__horizontal">
            <input dir="ltr" type="tel" value={firstValue} onChange={handleFirstChange}/>
            <span className="input__description">{props.firstDescription}</span>
          </div>
          {isFunction(props.onChangeSecond) && <div className="input__separator">/</div>}
          {
            isFunction(props.onChangeSecond) && (
              <div className="flex__column flex__center__horizontal">
                <input dir="ltr" type="tel" value={secondValue} onChange={handleSecondChange}/>
                <span className="input__description">{props.secondDescription}</span>
              </div>
            )}
        </div>
        <div>
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
            <span className="margin__right__20"><i className="icon-clock-square !text__xxlarge" /></span>
            <span className="time">12:40 PM</span>
          </div>
        </div>
      </div>
    </section>
  )
};


export default WeightTheme;
