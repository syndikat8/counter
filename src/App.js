import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Value from "./components/Value/Value";


class App extends React.Component {

  state = {
    number: 0,
    maxValue: 4,
    startValue: 2,
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
      startValue: Number(startNumber),
    })
  }
  onHandlerClickSet = () => {
    this.setState({
      number: this.state.startValue
    })

  }
  onCLickInput = () => {
    if (this.state.startValue < 0) {
      this.setState({
        number: "incorrect value!"
      })
    } else if (this.state.maxValue < 0) {
      this.setState({
        number: "incorrect value!"
      })
    } else if (this.state.maxValue === this.state.startValue) {
      this.setState({
        number: "incorrect value!"
      })
    }else {
      this.setState({
        number: "enter values and press 'set'"
      })
    }

  }

  render = () => {

    let classNameInc = this.state.number === this.state.maxValue ? "block" : "button"
    let classNameReset = this.state.number === this.state.startValue ? "block" : "button";

    let numberColor
    let classNameSet
    let startColor
    let maxColor
    if (this.state.startValue < 0) {
      classNameSet = "block"
      startColor = "input-elementRed"
      numberColor = "numberColor"

    } else if (this.state.maxValue < 0) {
      classNameSet = "block"
      maxColor = "input-elementRed"
      numberColor = "numberColor"
    } else if (this.state.maxValue === this.state.startValue) {
      startColor = "input-elementRed"
      maxColor = "input-elementRed"
      classNameSet = "block"
      numberColor = "numberColor"
    } else {
      classNameSet = "button"
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
