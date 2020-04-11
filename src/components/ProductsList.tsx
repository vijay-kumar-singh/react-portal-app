import React from 'react';
import Product from './Product';

interface IPropsProductsFilter {
    rooms: any[];
}


const ProductsList: React.FC<IPropsProductsFilter> = ({rooms}) => {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no products matched your search parameters</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                { rooms.map(item => {
                    return <Product key={item.id} room={item} />
                }) }
            </div>
        </section>
    )
}

export default ProductsList;
