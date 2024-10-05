export const products: Product[] = [
    {
        id: '1',
        name: 'Basic T-Shirt',
        price: 19.99,
        defaultCategoryId: 101,
        defaultDisplayedPriceFormatted: '$19.99',
        description: 'A simple, everyday t-shirt made from 100% cotton.',
        thumbnailUrl: 'https://picsum.photos/200/300?random=1',
        galleryImages: [
            'https://picsum.photos/400/600?random=1',
            'https://picsum.photos/400/600?random=2',
            'https://picsum.photos/400/600?random=2',
        ],
        inStock: true,
        media: {
            images: [
                {
                    id: 'img1',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=1',
                    imageAlt: 'Front view of Basic T-Shirt',
                    isMain: true,
                },
                {
                    id: 'img2',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=2',
                    imageAlt: 'Back view of Basic T-Shirt',
                    isMain: false,
                },
                {
                    id: 'img3',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=2',
                    imageAlt: ' view of Basic T-Shirt',
                    isMain: false,
                },
            ],
        },
    },
    {
        id: '2',
        name: 'Denim Jeans',
        price: 49.99,
        defaultCategoryId: 102,
        defaultDisplayedPriceFormatted: '$49.99',
        description: 'Stylish denim jeans with a comfortable fit and classic design.',
        thumbnailUrl: 'https://picsum.photos/200/300?random=3',
        galleryImages: [
            'https://picsum.photos/400/600?random=3',
            'https://picsum.photos/400/600?random=4',
        ],
        inStock: true,
        media: {
            images: [
                {
                    id: 'img3',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=3',
                    imageAlt: 'Front view of Denim Jeans',
                    isMain: true,
                },
                {
                    id: 'img4',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=4',
                    imageAlt: 'Back view of Denim Jeans',
                    isMain: false,
                },
            ],
        },
    },
    {
        id: '3',
        name: 'Sneakers',
        price: 69.99,
        defaultCategoryId: 103,
        defaultDisplayedPriceFormatted: '$69.99',
        description: 'Comfortable and stylish sneakers for all-day wear.',
        thumbnailUrl: 'https://picsum.photos/200/300?random=5',
        galleryImages: [
            'https://picsum.photos/400/600?random=5',
            'https://picsum.photos/400/600?random=6',
        ],
        inStock: false,
        media: {
            images: [
                {
                    id: 'img5',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=5',
                    imageAlt: 'Side view of Sneakers',
                    isMain: true,
                },
                {
                    id: 'img6',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=6',
                    imageAlt: 'Top view of Sneakers',
                    isMain: false,
                },
            ],
        },
    },
    {
        id: '4',
        name: 'Winter Jacket',
        price: 119.99,
        defaultCategoryId: 104,
        defaultDisplayedPriceFormatted: '$119.99',
        description: 'Warm and cozy winter jacket for cold weather conditions.',
        thumbnailUrl: 'https://picsum.photos/200/300?random=7',
        galleryImages: [
            'https://picsum.photos/400/600?random=7',
            'https://picsum.photos/400/600?random=8',
        ],
        inStock: true,
        media: {
            images: [
                {
                    id: 'img7',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=7',
                    imageAlt: 'Front view of Winter Jacket',
                    isMain: true,
                },
                {
                    id: 'img8',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=8',
                    imageAlt: 'Back view of Winter Jacket',
                    isMain: false,
                },
            ],
        },
    },
    {
        id: '5',
        name: 'Leather Boots',
        price: 89.99,
        defaultCategoryId: 105,
        defaultDisplayedPriceFormatted: '$89.99',
        description: 'Durable leather boots for all terrains and weather conditions.',
        thumbnailUrl: 'https://picsum.photos/200/300?random=9',
        galleryImages: [
            'https://picsum.photos/400/600?random=9',
            'https://picsum.photos/400/600?random=10',
        ],
        inStock: true,
        media: {
            images: [
                {
                    id: 'img9',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=9',
                    imageAlt: 'Side view of Leather Boots',
                    isMain: true,
                },
                {
                    id: 'img10',
                    imageOriginalUrl: 'https://picsum.photos/600/800?random=10',
                    imageAlt: 'Top view of Leather Boots',
                    isMain: false,
                },
            ],
        },
    },
];
