import React from 'react';
import Button from "../Counter/Button/Button";
import Input from "./Input/Input";


class Value extends React.Component {


  render = () => {


    return (
      <div className="counter">
        <div className="inputs">
          <Input className={this.props.maxColor}
                 onHandlerChange={this.props.onHandlerChangeMax}
                 value={this.props.maxValue}
                 name="Max Value:"
                 onCLickInput={this.props.onCLickInput}/>
          <Input className={this.props.startColor}
                 onHandlerChange={this.props.onHandlerChangeStart}
                 value={this.props.startValue}
                 onCLickInput={this.props.onCLickInput}
                 name="Start Value:"/>
        </div>
        <div className="buttons">
          <Button
            className={this.props.classNameSet}
            onHandlerClick={this.props.onHandlerClickSet}
            name="Set"/>
        </div>
      </div>
    );
  }
}

export default Value;
