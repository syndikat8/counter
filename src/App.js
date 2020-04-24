import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Value from "./components/Value/Value";


class App extends React.Component {

  state = {
    number: 0,
    resetNumber: 0,
    maxValue: 8,
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

  onHandlerChangeMax = (ww) => {
     return this.setState({
      maxValue: Number(ww),
    })
  }
  onHandlerChangeStart = (ww) => {
    return this.setState({
      startValue: Number(ww),
    })
  }
  onHandlerClickSet = () => {
    this.setState({
      number: this.state.startValue
    })
  }


  render = () => {

    let classNameInc = this.state.number === this.state.maxValue ? "incRed" : "button"
    let classNameReset = this.state.number === this.state.startValue ? "resetRed" : "button";
    let numberColor = this.state.number === this.state.maxValue ? "numberColor" : ""
    return (

      <div className="App">
        <Value
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
