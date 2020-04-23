import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";


class App extends React.Component {

  state = {
    number: 0,
    resetNumber: 0,

  }

  onHandlerClickInc = () => {
    this.setState({
      number: this.state.number +1,

    })
  }

  onHandlerClickReset = () => {
    this.setState({
      number: this.state.resetNumber,
    })
  }


  render =()=> {

    let classNameInc = this.state.number === 5? "incRed": "button"
    let classNameReset = this.state.number === 0? "resetRed": "button";
    let numberColor = this.state.number === 5? "numberColor": ""
    return (

      <div className="App">
         <Counter
           classNameInc={classNameInc}
           classNameReset={classNameReset}
           number={this.state.number}
           numberColor={numberColor}
           onHandlerClickInc={this.onHandlerClickInc}
           onHandlerClickReset={this.onHandlerClickReset} />
      </div>
    );
  }
}

export default App;
