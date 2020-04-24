import React from 'react';


class Input extends React.Component {

  onChange = (e) => {
    this.props.onHandlerChange(e.target.value)
  }
  render = () => {
    return (
      <div className="input-item">
        <span>{this.props.name}</span>
        <input
          onChange={this.onChange}
          className="input-element"
          type="number"
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
