import React from 'react'
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title,imgUrl,size,history,linkUrl,match}) => (      
<div className = {`menu-item ${size}`}  onClick ={() => history.push(`${match.url}${linkUrl}`)}> 
<div className ="background-image" style= {{backgroundImage: `url(${imgUrl})`}}/>
<div className="content" >
   <h1 className="title">{title.toUpperCase()}</h1> 
   <span className="subtite">
       SHOP NOW
   </span>
</div>
</div>
)

export default withRouter(MenuItem);