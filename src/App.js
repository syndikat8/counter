import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Value from "./components/Value/Value";
import {restore, save} from "./localStorge";


class App extends React.Component {

  componentDidMount() {
    this.restoreState()
  }

  state = {
    number: 0,
    maxValue: 4,
    startValue: 2,
    buttonBlock: "block",
    buttonUnblock: "button"
  }

  saveState = () => {
    save(this.state)
  }

  restoreState = () => {
    let stateAsString = restore();
    if (stateAsString){
      let state = JSON.parse(stateAsString);
      this.setState(state)
    }
  }

  onHandlerClickInc = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }
  onHandlerClickReset = () => {
    this.setState({
      number: this.state.startValue,
    })
  }

  onHandlerChangeMax = (maxNumber) => {
    return this.setState({
      maxValue: Number(maxNumber),
    })

  }
  onHandlerChangeStart = (startNumber) => {
    return this.setState({
      startValue: Number(startNumber) ,
    })
  }
  onHandlerClickSet = () => {
    this.setState({
      number: this.state.startValue,
      buttonBlock:"block",
      buttonUnblock: "button"
    }, () => {
      this.saveState()
    })

  }
  onCLickInput = () => {
    if (this.state.startValue < 0) {
      this.setState({
        number: "incorrect value!"
      }, () => {
        this.saveState()
      })
    } else if (this.state.maxValue < 0) {
      this.setState({
        number: "incorrect value!"
      }, () => {
        this.saveState()
      })
    } else if (this.state.maxValue === this.state.startValue) {
      this.setState({
        number: "incorrect value!"
      }, () => {
        this.saveState()
      })
    } else if (this.state.maxValue < this.state.startValue) {
      this.setState({
        startValue: this.state.maxValue
      }, () => {
        this.saveState()
      })
    } else {
      this.setState({
        number: "enter values and press 'set'",
        buttonBlock:"button",
        buttonUnblock: "block"
      }, () => {
        this.saveState()
      })
    }

  }

  render = () => {

   let  classNameInc
    if (this.state.number === this.state.maxValue) {
      classNameInc = this.state.buttonBlock
    } else {
      classNameInc = this.state.buttonUnblock
    }
    let classNameReset
    if (this.state.number === this.state.startValue) {
      classNameReset = this.state.buttonBlock
    } else {
      classNameReset = this.state.buttonUnblock
    }

    let numberColor
    let classNameSet
    let startColor
    let maxColor
    if (this.state.startValue < 0) {
      classNameSet = "block"
      startColor = "input-elementRed"
      numberColor = "numberColor"
      maxColor = "input-element"

    } else if (this.state.maxValue < 0) {
      classNameSet = "block"
      maxColor = "input-elementRed"
      numberColor = "numberColor"
      startColor = "input-element"
    } else if (this.state.maxValue === this.state.startValue) {
      startColor = "input-elementRed"
      maxColor = "input-elementRed"
      classNameSet = "block"
      numberColor = "numberColor"
    } else {
      classNameSet = this.state.buttonBlock
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
          maxValue={this.state.maxValue}
          startValue={this.state.startValue}
        />

        <Counter
          classNameInc={classNameInc}
          classNameReset={classNameReset}
          number={this.state.number}
          numberColor={numberColor}
          onHandlerClickInc={this.onHandlerClickInc}
          onHandlerClickReset={this.onHandlerClickReset}/>
      </div>
    );
  }
}

export default App;
