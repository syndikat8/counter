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
    counterValue: 0,
    maxValue: 4,
    startValue: 2,
    statusBlock: "block",
    statusUnblock: "unblock"
  }

  saveState = () => {
    save(this.state)
  }

  restoreState = () => {
    let stateAsString = restore();
    if (stateAsString) {
      let state = JSON.parse(stateAsString);
      this.setState(state)
    }
  }

  onHandlerClickInc = () => {
    this.setState({
      counterValue: this.state.counterValue + 1,
    })
  }
  onHandlerClickReset = () => {
    this.setState({
      counterValue: this.state.startValue,
    })
  }

  onHandlerChangeMax = (maxNumber) => {
    return this.setState({
      maxValue: Number(maxNumber),
    })

  }
  onHandlerChangeStart = (startNumber) => {
    return this.setState({
      startValue: Number(startNumber),
    })
  }
  onHandlerClickSet = () => {
    this.setState({
      counterValue: this.state.startValue,
      statusBlock: "block",
      statusUnblock: "unblock"
    }, () => {
      this.saveState()
    })
  }

  onCLickInput = () => {
    if ((this.state.startValue || this.state.maxValue) < 0) {
      this.setState({
        counterValue: "incorrect value!"
      }, () => {
        this.saveState()
      })
    } else if (this.state.maxValue === this.state.startValue) {
      this.setState({
        counterValue: "incorrect value!"
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
        counterValue: "enter values and press 'set'",
        statusBlock: "unblock",
        statusUnblock: "block"
      }, () => {
        this.saveState()
      })
    }
  }

  render = () => {

    let classNameInc =  this.state.counterValue === this.state.maxValue? this.state.statusBlock: this.state.statusUnblock
    let classNameReset =  this.state.counterValue === this.state.startValue? this.state.statusBlock: this.state.statusUnblock

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
    } else if (this.state.counterValue === this.state.maxValue) {
      startColor = "input-element"
      maxColor = "input-element"
      classNameSet = "block"
      numberColor = "numberColor"
    } else {
      classNameSet = this.state.statusBlock
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
          counterValue={this.state.counterValue}
          numberColor={numberColor}
          onHandlerClickInc={this.onHandlerClickInc}
          onHandlerClickReset={this.onHandlerClickReset}/>
      </div>
    );
  }
}

export default App;
