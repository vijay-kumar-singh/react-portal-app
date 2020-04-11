import React from 'react';
import defaultImg from "../assets/images/product-1.jpeg";
import { Link } from 'react-router-dom';
import { ProdObject } from '../models/models';

interface IProdProps {
    room: ProdObject;
}

const Product: React.FC<IProdProps> = React.memo<React.PropsWithChildren<IProdProps>>((props) => {
    const { name, slug, images, price } = props.room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} />
                <div className="price-top">
                    <h6>${price}</h6>
                </div>
                <Link to={`/products/${slug}`} className="btn-primary room-link">features</Link>
             </div>
             <p className="room-info">{name}</p>
        </article>
    )
})

export default Product;

// React.memo
// Class components can bail out from rendering when their input props are 
// the same using PureComponent or shouldComponentUpdate. Now you can do the 
// same with function components by wrapping them in React.memo.
