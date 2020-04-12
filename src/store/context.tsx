import React, { Component, ReactElement } from 'react';
import { IStateContext, ProductObject } from '../models/models';
import items from './data';

const ProductContext = React.createContext<ProductObject | null>(null);

class ProductsProvider extends Component<{}, IStateContext> {

    public readonly state: Readonly<IStateContext> = {
        rooms: [],
        sortedProducts: [],
        featuredProducts: [],
        loading: true,
        type: "all",
        price: 0,
        minPrice: 0,
        maxPrice: 0
    }

    // Get Data when component mount
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredProducts = rooms.filter((room: any) => room.featured === true);
        let maxPrice = Math.max(...rooms.map((item: any) => item.price));

        this.setState({
            rooms,
            featuredProducts,
            sortedProducts: rooms,
            loading: false,
            price: maxPrice,
            maxPrice
        })

    }

    render(): ReactElement {
        return (
            <ProductContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange, handleChecked: this.handleChecked}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }

    private formatData = (items: any) => {
        const tempItems = items.map((item: any) => {
            let id = item.sys.id
            let images = item.fields.images.map((image: any) => image.fields.file.url)
            const room = {...item.fields, images, id} // Reformating the array
            return room;
        })

        return tempItems;
    }

    private getRoom = (slug: string) => {
        const tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room: any) => room.slug === slug);
        return room;
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = event.target.value;
        const name = event.target.name;

        const obj: any = {};
        obj[name] = value;

        this.setState(obj, this.filterRooms);
    }

    private handleChecked = (event: any) => {
        const value = event.target.checked;
        const name = event.target.name;

        const obj: any = {};
        obj[name] = value;

        this.setState(obj, this.filterRooms);
    }

    private filterRooms = () => {
        let { rooms, type, price } = this.state;
        // all the rooms
        let tempRooms = [...rooms];
        // transform value
        price = Number(price);

        // filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)
        // change state
        this.setState({
            sortedProducts: tempRooms
        })
    }
}

const RoomConsumer = ProductContext.Consumer;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// For Using Context with Functional Component (Stateless) with HOC
export const withRoomConsumer = <P extends {}>(Component: React.ComponentClass<P> | React.StatelessComponent<P>): React.FC<any> => props => {
    return <RoomConsumer>
            { value => <Component {...props} context={value} />}
        </RoomConsumer>;
};

// Exporting all contexts
export {ProductsProvider, RoomConsumer, ProductContext};

