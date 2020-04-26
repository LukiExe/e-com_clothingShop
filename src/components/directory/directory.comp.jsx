import React from 'react';
import './directory.scss';

import MenuItem from '../menu-item/menu-item.comp';

class Directory extends React.Component {
    constructor(){
        super();
        
        this.state = {
            sections: [
            {
                title: 'shirts',
                imageUrl: 'https://www.wolczanka.pl/product_picture/fill_1800x2812/e641b2a7c54ca2fcc3bdf68c508b36ad.jpg',
                size: 'vertical',
                id: 1
            },
            {
                title: 'pants',
                imageUrl: 'https://www.wolczanka.pl/product_picture/fill_1800x2812/db62397f423f50bf9a686303f48b8dc4.jpg',
                size: 'vertical',
                id: 2
            },
            {
                title: 'accessories',
                imageUrl: 'https://www.wolczanka.pl/product_picture/fill_1800x2812/280f1c5ef58d75e39b0d38999f2957d0.jpg',
                size: 'vertical',
                id: 3
            },
            {
                title: 'women',
                imageUrl: 'https://i.imgur.com/i8awq5F.png',
                size: 'horizontal',
                id: 4
            },
            {
                title: 'men',
                imageUrl: 'https://i.imgur.com/oK5T8Kf.jpg',
                size: 'horizontal',
                id: 5
            }]
        }
    }
    render(){
        return (
            <div className='directory'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} id={id}/>
                    ))}
            </div>
        );
    }
}

export default Directory;