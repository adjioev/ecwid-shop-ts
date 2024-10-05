export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl?: string;
    imageAlt?: string;
    defaultCategoryId: number;
    defaultDisplayedPriceFormatted: string;
    description: string;
    thumbnailUrl: string;
    galleryImages: string[];
    inStock: boolean;
    media: {
        images: ProductImage[];
    };
    options?: Option[];
}

export interface ProductImage {
    id: string;
    imageOriginalUrl: string;
    imageAlt: string;
    isMain: boolean;
}


export interface Option {
    type: string;
    name: string;
    choices: Choice[];  // List of choices like S, M, L, etc.
    defaultChoice: number;
    required: boolean;
}

export interface Choice {
    text: string;
    priceModifier: number;
}

export interface Size {
    name: string,
    inStock: boolean,
}

export interface ProductResponse {
    items: Product[];
    count: number;
}

