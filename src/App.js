import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Value from "./components/Value/Value";
import {connect} from "react-redux";
import {buttonInc, buttonReset, buttonSet, changeInput, changeValueMax, changeValueStart} from "./redux/reducer";


class App extends React.Component {

  onHandlerClickInc = () => {
    this.props.buttonInc()
  }
  onHandlerClickReset = () => {
    this.props.buttonReset()
  }

  onHandlerChangeMax = (maxNumber) => {
    this.props.changeValueMax(maxNumber)
  }
  onHandlerChangeStart = (startNumber) => {
    this.props.changeValueStart(startNumber)
  }
  onHandlerClickSet = () => {
    this.props.buttonSet()
  }

  onCLickInput = () => {
    this.props.changeInput()
  }

  render = () => {

    let classNameInc =  this.props.counterValue === this.props.maxValue? this.props.statusBlock: this.props.statusUnblock
    let classNameReset =  this.props.counterValue === this.props.startValue? this.props.statusBlock: this.props.statusUnblock

    let numberColor
    let classNameSet
    let startColor
    let maxColor
    if (this.props.startValue < 0) {
      classNameSet = "block"
      startColor = "input-elementRed"
      numberColor = "numberColor"
      maxColor = "input-element"

    } else if (this.props.maxValue < 0) {
      classNameSet = "block"
      maxColor = "input-elementRed"
      numberColor = "numberColor"
      startColor = "input-element"
    } else if (this.props.maxValue === this.props.startValue) {
      startColor = "input-elementRed"
      maxColor = "input-elementRed"
      classNameSet = "block"
      numberColor = "numberColor"
    } else if (this.props.counterValue === this.props.maxValue) {
      startColor = "input-element"
      maxColor = "input-element"
      classNameSet = "block"
      numberColor = "numberColor"
    } else {
      classNameSet = this.props.statusBlock
      startColor = "input-element"
      maxColor = "input-element"
      numberColor = ""
    }


    return (

      <div className="App">
        <Value
          onCLickInput={this.onCLickInput}
          startColor={startColor}
          maxColor={maxColor}
          classNameSet={classNameSet}
          onHandlerClickSet={this.onHandlerClickSet}
          onHandlerChangeMax={this.onHandlerChangeMax}
          onHandlerChangeStart={this.onHandlerChangeStart}
          maxValue={this.props.maxValue}
          startValue={this.props.startValue}
        />

        <Counter
          classNameInc={classNameInc}
          classNameReset={classNameReset}
          counterValue={this.props.counterValue}
          numberColor={numberColor}
          onHandlerClickInc={this.onHandlerClickInc}
          onHandlerClickReset={this.onHandlerClickReset}/>
      </div>
    );
  }
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



export default connect(mapStateToProps,{buttonInc,buttonReset,buttonSet,changeValueStart,changeValueMax,changeInput})(App) ;
