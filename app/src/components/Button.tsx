import React from 'react';
import "../styles/button.css"
interface IProps{
    classname:string;
    onClick:any
    text:string
}
function Button(props:IProps) {
    const {classname, onClick, text} = props
  return (
    <button className={classname} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
