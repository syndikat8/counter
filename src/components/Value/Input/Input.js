import React from 'react';


const Input = (props) => {

  let onChange = (e) => {
    props.onHandlerChange(e.target.value)
  }
  let onCLickInput = () => {
    props.onCLickInput()
  }

  return (
    <div className="input-item">
      <span>{props.name}</span>
      <input
        onClick={onCLickInput}
        onChange={onChange}
        className={props.className}
        type="number"
        value={props.value}
      />
    </div>
  );
}

export default Input;
