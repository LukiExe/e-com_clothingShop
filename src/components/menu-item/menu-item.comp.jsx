import React from 'react';
import './menu-item.scss'

const MenuItem = ({title,imageUrl, size, id}) => (
    <div
    style={{backgroundImage: `url(${imageUrl})`}}
    className={`${size} menu-item m${id}`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
        </div>
    </div>
);

export default MenuItem;