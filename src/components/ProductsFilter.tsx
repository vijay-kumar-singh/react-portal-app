import React, { useContext } from 'react';
import { ProductContext } from '../store/context';
import { ProductObject } from '../models/models';
import Title from './Title';
import Loading from './Loading';

interface IPropsRoomsFilter {
    rooms: any[];
}

// Get all unique items
const getUnique = (items: any[], value: any) => {
    return [...new Set(items.map(item => item[value]))]
}

// Another method of using context without HOC or provider
const ProductsFilter: React.FC<IPropsRoomsFilter> = ({rooms}) => {

    const context: ProductObject | null = useContext(ProductContext);
    if (context) {
    const { handleChange, type, price, minPrice, maxPrice} = context;
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];

    return (
        <section className="filter-container">
            <Title title="search products" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">product type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types.map((item: any, index: number) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                {/* end of select type */}
                {/* product price */}
                <div className="form-group">
                    <label htmlFor="price">
                        product price ${price}
                    </label>
                    <input type="range" id="price" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/* end of product price */}
            </form>
        </section>
    )
    } else {
        return <Loading />
    }
}

export default ProductsFilter;
