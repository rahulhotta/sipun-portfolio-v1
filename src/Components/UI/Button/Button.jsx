import React from 'react';
import  './Button.css';
function Button(props) {
  return (
    <button className='ui__button__container'>
        <div className='ui__button_text_container'>{props.children}</div>
    </button>
  )
}

export default Button