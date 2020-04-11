import React from 'react';
import ProductsFilter from '../components/ProductsFilter';
import ProductsList from '../components/ProductsList';
import { withRoomConsumer } from '../store/context';
import Loading from '../components/Loading';
import { ProductObject } from '../models/models';

interface IPropsProductsContainer {
    context: ProductObject
}

// Use Context in functional component with HOC
const ProductsContainer: React.FC<IPropsProductsContainer> = ({context}) => {

    const {loading, rooms, sortedProducts} = context;
    console.log("context", context);

    if (loading) {
        return <Loading />
    }
    return (
        <React.Fragment>
            <ProductsFilter rooms={rooms} />
            <ProductsList rooms={sortedProducts}/> 
        </React.Fragment>
    );
}

export default withRoomConsumer(ProductsContainer);