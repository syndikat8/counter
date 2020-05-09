import React from 'react';
import CounterValue from "./CounterValue/CounterValue";
import Button from "./Button/Button";
import {connect} from "react-redux";
import {buttonInc, buttonReset} from "../../redux/reducer";


const Counter = (props) => {

  let onHandlerClickInc = () => {
    props.buttonInc()
  }
  let onHandlerClickReset = () => {
    props.buttonReset()
  }
  return (
    <div className="counter">
      <CounterValue counterValue={props.counterValue} numberColor={props.numberColor}/>
      <div className="buttons">
        <Button
          className={props.classNameInc}
          onHandlerClick={onHandlerClickInc}
          name="Inc"/>
        <Button
          className={props.classNameReset}
          onHandlerClick={onHandlerClickReset}
          name="Reset"/>
      </div>
    </div>
  );

}


export default connect(null, {buttonInc, buttonReset})(Counter);
