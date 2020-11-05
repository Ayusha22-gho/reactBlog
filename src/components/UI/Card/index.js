import React from 'react';
import './style.css';

const Card = props =>{
    return (
        <div className = "card" {...props}>
            {/* to retain the property of card {...props}
            => style = {props.style} can also be used
            in this we have to mention {...props}
            => style = {{width:props.width? props.width: '100%'}} for this blogpost and sidebar
            use width='70/27%' instead of style */}
            {props.children}
        </div>
    )
}
export default Card