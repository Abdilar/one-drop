import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker2';
import {isEmpty, jalaliDate} from "../../helper/functions";

import "./ActivityTheme.style.scss"

const ActivityTheme = React.forwardRef((props, ref) => {
  const [value, setValue] = useState("0");
  const date = jalaliDate(Date.now());

  useEffect(() => {
    const datepicker = document.getElementsByClassName('datepicker-input')[0];
    datepicker.addEventListener('focus', (e) => datepicker.blur());
  }, []);

  const handleChange = ({target}) => {
    setValue(target.value);
    props.onChange(!!+target.value ? target.value : '');
  };

  return (
    <section className="flex-1">
      <div className={`${!props.isBest ? "activity__header" : "padding__horizontal__20"}`}>
        <div className={`${props.isBest ? "best-input flex__column" : ""} activity__input text__center ${props.isGlucose ? "padding__vertical__25" : ""} border__bottom ${props.isBest && props.isGlucose ? "!padding__bottom__80" : ""}` }>
          {
            props.isBest ? (
              <div className={`flex__column flex__center__horizontal ${!props.isGlucose ? "margin__bottom__25" : ""}`}>
                <input ref={ref} tabIndex="0" dir="ltr" type="tel" value={value} onChange={handleChange} />
                <span className={`activity__description ${props.isBest ? "text__black" : ""}`}>{props.description}</span>
              </div>
              ) : (
              <div className={props.color}>
                <div className={`flex__column ${props.color}`}>
                  <span className="activity__icon" uk-icon="icon: grid" />
                  <input ref={ref} dir="ltr" type="tel" value={value} onChange={handleChange}/>
                  <span className="activity__description">{props.description}</span>
                </div>
              </div>
            )
          }
          {
            !isEmpty(props.children) && props.children
          }
        </div>
        <div>
          {
            props.isBest ? (
              <div className="padding__vertical__15 border__bottom">
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
            ) : (
              <div dir="ltr" className="padding__vertical__15 border__bottom padding__horizontal__20 flex__center__vertical">
                <span className="margin__right__20"><i className="icon-calendar !text__xxlarge" /></span>
                <DatePicker
                  onChange={value => console.log()}
                  isGregorian={false}
                  value={date}
                  timePicker={false}
                />
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
});


export default ActivityTheme;
