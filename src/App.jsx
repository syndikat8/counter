import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Value from "./components/Value/Value";
import {connect} from "react-redux";

const App = (props) => {

  let classNameInc = props.counterValue === props.maxValue ? props.statusBlock : props.statusUnblock
  let classNameReset = props.counterValue === props.startValue ? props.statusBlock : props.statusUnblock

  let numberColor
  let classNameSet
  let startColor
  let maxColor
  if (props.startValue < 0) {
    classNameSet = "block"
    startColor = "input-elementRed"
    numberColor = "numberColor"
    maxColor = "input-element"

  } else if (props.maxValue < 0) {
    classNameSet = "block"
    maxColor = "input-elementRed"
    numberColor = "numberColor"
    startColor = "input-element"
  } else if (props.maxValue === props.startValue) {
    startColor = "input-elementRed"
    maxColor = "input-elementRed"
    classNameSet = "block"
    numberColor = "numberColor"
  } else if (props.counterValue === props.maxValue) {
    startColor = "input-element"
    maxColor = "input-element"
    classNameSet = "block"
    numberColor = "numberColor"
  } else {
    classNameSet = props.statusBlock
    startColor = "input-element"
    maxColor = "input-element"
    numberColor = ""
  }


  return (

    <div className="App">
      <Value
        startColor={startColor}
        maxColor={maxColor}
        classNameSet={classNameSet}
        maxValue={props.maxValue}
        startValue={props.startValue}
      />

      <Counter
        classNameInc={classNameInc}
        classNameReset={classNameReset}
        counterValue={props.counterValue}
        numberColor={numberColor}/>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    counterValue: state.counterValue,
    maxValue: state.maxValue,
    startValue: state.startValue,
    statusBlock: state.statusBlock,
    statusUnblock: state.statusUnblock,
  }
}


export default connect(mapStateToProps, null)(App);
