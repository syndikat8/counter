import React from 'react';


class Button extends React.Component {


  render = () => {

    return <button disabled={this.props.disabled}
                   onClick={this.props.onHandlerClick}
                   className={this.props.className}>
      {this.props.name}
    </button>

  }
}

export default Button;
