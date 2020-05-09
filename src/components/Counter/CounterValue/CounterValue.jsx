import React from 'react';



const CounterValue = (props) => {

    return (
      <div className="span">
      <span className={props.numberColor}>{props.counterValue}</span>
      </div>
    );

}

export default CounterValue;
