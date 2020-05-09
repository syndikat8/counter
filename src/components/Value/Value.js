import React from 'react';
import Button from "../Counter/Button/Button";
import Input from "./Input/Input";
import {connect} from "react-redux";
import {buttonSet, changeInput, changeValueMax, changeValueStart} from "../../redux/reducer";


const Value = (props) => {

 let onHandlerChangeMax = (maxNumber) => {
    props.changeValueMax(maxNumber)
  }
  let onHandlerChangeStart = (startNumber) => {
    props.changeValueStart(startNumber)
  }
  let onHandlerClickSet = () => {
    props.buttonSet()
  }


  return (
      <div className="counter">
        <div className="inputs">
          <Input className={props.maxColor}
                 onHandlerChange={onHandlerChangeMax}
                 value={props.maxValue}
                 name="Max Value:"
                 onCLickInput={props.changeInput}/>
          <Input className={props.startColor}
                 onHandlerChange={onHandlerChangeStart}
                 value={props.startValue}
                 onCLickInput={props.changeInput}
                 name="Start Value:"/>
        </div>
        <div className="buttons">
          <Button
            className={props.classNameSet}
            onHandlerClick={onHandlerClickSet}
            name="Set"/>
        </div>
      </div>
    );
}

export default connect(null,{buttonSet,changeValueStart,changeValueMax,changeInput})(Value) ;
