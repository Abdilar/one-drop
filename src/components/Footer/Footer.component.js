import React from 'react';
import {isFunction} from "../../helper/functions";

const Footer = (props) => {
  const normalClasses = !props.isBest ? 'border__bottom background__muted padding__horizontal__20 padding__vertical__15' : 'padding__bottom__15';

  return (
    <footer className="padding__10 display__flex">
      {
        isFunction(props.onAccept) && (
          <button
            className="button__primary text__large margin__left__10 padding__horizontal__15 flex-1"
            onClick={() => props.onAccept()}
          >
            ثبت کنید
          </button>
        )
      }
      <button className="button__default text__large padding__horizontal__15" onClick={() => props.onBack()}>بازگشت به عقب</button>
    </footer>
  );
};


export default Footer;
