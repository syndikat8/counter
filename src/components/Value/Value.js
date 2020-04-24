import React from 'react';
import Button from "../Counter/Button/Button";
import Input from "./Input/Input";




class Value extends React.Component {


  render =()=> {


    return (
      <div className="counter">
        <div className="inputs">
        <Input onHandlerChange={this.props.onHandlerChangeMax} value={this.props.maxValue} name="Max Value:"/>
        <Input onHandlerChange={this.props.onHandlerChangeStart} value={this.props.startValue} name="Start Value:"/>
        </div>
        <div className="buttons" >
          <Button
            className="button"
            onHandlerClick={this.props.onHandlerClickSet}
            name="Set" />
        </div>
      </div>
    );
  }
}

export default Value;
