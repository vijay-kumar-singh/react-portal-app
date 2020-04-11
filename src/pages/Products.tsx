import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';

const Products: React.FC = () => {
    return (
        <React.Fragment>
        <Cover coverClass="roomsHero">
            <Banner title="our products">
            <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Cover>
        <ProductsContainer />
        </React.Fragment>
    )
}

export default Products;