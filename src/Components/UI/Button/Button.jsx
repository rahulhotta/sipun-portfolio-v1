import React from 'react';
import  './Button.css';
function Button(props) {
  return (
    <button className='ui__button__container'>
        {props.children}
    </button>
  )
}

export default Button