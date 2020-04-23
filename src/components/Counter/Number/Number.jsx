import React from 'react';



class Number extends React.Component {


  render =()=> {


    return (
      <div className="span">
      <span className={this.props.numberColor}>{this.props.number}</span>
      </div>
    );
  }
}

export default Number;
