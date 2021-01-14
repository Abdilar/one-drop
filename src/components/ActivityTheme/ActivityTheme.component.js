import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker2';
import {isEmpty, jalaliDate} from "../../helper/functions";

import "./ActivityTheme.style.scss"

const ActivityTheme = (props) => {
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
      <div className="activity__header">
        <div className="activity__input text__center padding__vertical__25 border__bottom">
          <div className={props.color}>
            <div className={`flex__column ${props.color}`}>
              <span className="activity__icon" uk-icon="icon: grid" />
              <input dir="ltr" type="tel" value={value} onChange={handleChange}/>
              <span className="activity__description">{props.description}</span>
            </div>
          </div>
          {!isEmpty(props.children) && props.children}
        </div>
        <div>
          <div dir="ltr" className="padding__vertical__15 border__bottom padding__horizontal__20 flex__center__vertical">
            <span className="margin__right__20"><i className="icon-calendar !text__xxlarge" /></span>
            {/*<DatePicker timePicker={false} />*/}
            <DatePicker
              onChange={value => console.log('time change')}
              isGregorian={false}
              value={date}
              timePicker={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
};


export default ActivityTheme;
