import React, { Component } from 'react';
import defaultImg from "../assets/images/product-1.jpeg";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { ProductContext } from '../store/context';
import StyledCover from '../components/StyledCover';

interface IPropsProductDetails {
    match: any;
    getRoom: (slug: string) => any;
}

interface IStateProductDetails {
    slug: string;
    defaultbcg: string;
}

export default class ProductDetails extends Component<IPropsProductDetails, IStateProductDetails> {

    constructor(props: IPropsProductDetails) {
        super(props)
    
        this.state = {
            slug: this.props.match.params.slug,
            defaultbcg: defaultImg
        }
    }

    // Providing Context
    static contextType = ProductContext;
    
    public render() {
        // console.log("props", this.props);
        const { getRoom } = this.context;
        const room: any = getRoom(this.state.slug);

        if (!room) {
            return (
                <div className="error">
                    <h3>no such product could be found...</h3>
                    <Link to="/products" className="btn-primary">back to products</Link>
                </div>
            );
        }

        const {name, description, size, price, extras, images} = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <React.Fragment>
               <StyledCover img={mainImg || this.state.defaultbcg}>
                   <Banner title={`${name}`} >
                       <Link to="/products" className="btn-primary">back to products</Link>
                   </Banner>
               </StyledCover>
               <section className="single-room">
                   <div className="single-room-info">
                       <article className="desc">
                           <h3>details</h3>
                           <p>{description}</p>
                       </article>
                       <article className="info">
                           <h3>info</h3>
                           <h6>price : ${price}</h6>
                       </article>
                   </div>
               </section>
               <section className="room-extras">
                   <h6>Features</h6>
                   <ul className="extras">
                       {extras.map((item: string, index: number) => {
                           return <li key={index}>- {item}</li>
                       })}
                   </ul>
               </section>
            </React.Fragment>
        )
    }
}
