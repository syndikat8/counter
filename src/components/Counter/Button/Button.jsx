import React from 'react';


const Button = (props) => {

    return (
      <button
        onClick={props.onHandlerClick}
        className={props.className}>
        {props.name}
      </button>
    )

}

export default Button;
