import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Value from "./components/Value/Value";


class App extends React.Component {

  state = {
    number: "enter values and press 'set'",
    maxValue: 4,
    startValue: 2,
    buttonBlock: "block",
    buttonUnblock: "button"
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
      number: this.state.startValue,
      buttonBlock:"block",
      buttonUnblock: "button"
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
        number: "enter values and press 'set'",
        buttonBlock:"button",
        buttonUnblock: "block"
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
