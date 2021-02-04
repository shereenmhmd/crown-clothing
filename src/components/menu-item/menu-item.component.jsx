import React from 'react'

import './menu-item.styles.scss';

export const MenuItem = ({title,imgUrl,size}) => (      
<div className = {`menu-item ${size}`} >
<div className ="background-image" style= {{backgroundImage: `url(${imgUrl})`}}/>
<div className="content" >
   <h1 className="title">{title.toUpperCase()}</h1> 
   <span className="subtite">
       SHOP NOW
   </span>
</div>
</div>
)

