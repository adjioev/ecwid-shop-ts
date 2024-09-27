export interface Product {
    id: string;
    name: string;
    price: number;
    defaultDisplayedPriceFormatted: string;
    description: string;
    thumbnailUrl: string;
    galleryImages: string[];
    inStock: boolean;
}

