import React, { Component } from 'react';

const Square = (props) => {
  
  const handleClick = () => {
    props.playMove(props.index);
  }

  return (
    <button onClick={handleClick} className="square">{props.value}</button>
  );
}

export default Square;
