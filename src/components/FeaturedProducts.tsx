import React, { Component } from 'react';
import { ProductContext } from '../store/context';
import Title from './Title';
import Loading from './Loading';
import Product from './Product';

export default class FeaturedProducts extends Component {
    static contextType = ProductContext;
    public render() {
        const { loading, featuredProducts } = this.context;
        
        const rooms = featuredProducts.map((room: any) => {
            return <Product key={room.id} room={room} />;
        })
        return (
            <section className="featured-rooms"> 
                <Title title="featured products"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
