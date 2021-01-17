import React from 'react';
import {isFunction} from "../../helper/functions";

const Header = (props) => {
  const normalClasses = !props.isBest ? 'border__bottom background__muted padding__horizontal__20 padding__vertical__15' : 'padding__bottom__15';

  return (
    <header className={`${normalClasses} flex__space-between flex__center__vertical`}>
      <span className="flex__center__vertical">
        {
          !props.isBest && (
            <span onClick={() => props.onBack()} >
              <span className="flex__center__vertical">
                <i className="icon-arrow-right !text__xxlarge"/>
              </span>
            </span>
          )
        }
        {
          props.isBest ? (
            <h4 className="margin__remove padding__right__10">{props.title}</h4>
          ) : (
            <h6 className="margin__remove padding__right__25">{props.title}</h6>
          )
        }
      </span>

      {
        !props.isBest && isFunction(props.onAccept) && (
          <span onClick={() => props.onAccept()} >
            <span className="flex__center__vertical">
              <i className="icon-check !text__xxlarge"/>
            </span>
          </span>
        )
      }
    </header>
  );
};


export default Header;
