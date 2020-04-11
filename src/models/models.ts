export interface IStateContext {
    rooms: any[];
    sortedProducts: any[];
    featuredProducts: any[];
    loading: boolean;
    type: string;
    price: number;
    minPrice: number;
    maxPrice: number;
};

export interface ProdObject {
    name: string;
    slug: string;
    images: string[];
    price: number;
}

export interface ProductObject {
    rooms: any[];
    sortedProducts: any[];
    featuredProducts: any[];
    loading: boolean;
    type: string;
    price: number;
    minPrice: number;
    maxPrice: number;
    getRoom: (slug: string) => any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => any;
    handleChecked: (event: any) => any;
}