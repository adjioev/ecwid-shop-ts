export interface Product {
    id: string;
    name: string;
    price: number;
    defaultCategoryId: number;
    defaultDisplayedPriceFormatted: string;
    description: string;
    thumbnailUrl: string;
    galleryImages: string[];
    inStock: boolean;
    media: {
        images: ProductImage[];
    };
}

export interface ProductImage {
    id: string;
    imageOriginalUrl: string;
    imageAlt: string;
    isMain: boolean;
}