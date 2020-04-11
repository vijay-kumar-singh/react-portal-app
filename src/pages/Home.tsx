import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedProducts from '../components/FeaturedProducts';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Cover>
                <Banner 
                title="Best Insurance Products"
                subtitle="basic plan starting at $299"
                >
                <Link to="/products" className="btn-primary">our products</Link>
                </Banner>
            </Cover>
            <Services/>
            <FeaturedProducts />
        </React.Fragment>
    )
}

export default Home
