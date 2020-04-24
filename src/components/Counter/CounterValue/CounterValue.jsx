import React from 'react';



class CounterValue extends React.Component {


  render =()=> {


    return (
      <div className="span">
      <span className={this.props.numberColor}>{this.props.counterValue}</span>
      </div>
    );
  }
}

export default CounterValue;
