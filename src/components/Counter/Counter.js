import React from 'react';
import Number from "./Number/Number";
import Button from "./Button/Button";



class Counter extends React.Component {


  render =()=> {


    return (
      <div className="counter">
          <Number number={this.props.number} numberColor={this.props.numberColor}/>
        <div className="buttons" >
          <Button
            className={this.props.classNameInc}
            onHandlerClick={this.props.onHandlerClickInc}
            name="Inc" />
          <Button
            className={this.props.classNameReset}
            onHandlerClick={this.props.onHandlerClickReset}
            name="Reset"/>
        </div>
      </div>
    );
  }
}

export default Counter;
