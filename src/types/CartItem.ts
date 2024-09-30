export interface CartItem {
    id: string;
    name: string;
    inStock: boolean,
    url: string;
    price: number;
    quantity: number;
    size?: string;
    leadTime?: string;
}