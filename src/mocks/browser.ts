import { setupWorker, rest } from 'msw';

// Environment variables mock values (use real ones if needed)
const STORE_ID = 'fake-store-id';
const BASE_URL = `https://fake-api.example.com/${STORE_ID}/`;

// Define your mock request handlers
export const worker = setupWorker(
    // Mock the 'fetchProducts' call
    rest.get(`${BASE_URL}products`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, name: 'Product 1', price: 100 },
                { id: 2, name: 'Product 2', price: 150 }
            ])
        );
    }),

    // Mock the 'fetchProductById' call
    rest.get(`${BASE_URL}products/:productId`, (req, res, ctx) => {
        const { productId } = req.params;
        if (productId === '1') {
            return res(
                ctx.status(200),
                ctx.json({ id: 1, name: 'Product 1', price: 100 })
            );
        } else {
            return res(
                ctx.status(404),
                ctx.json({ error: 'Product not found' })
            );
        }
    }),

    // Mock the 'fetchCategories' call
    rest.get(`${BASE_URL}categories`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, name: 'Category 1' },
                { id: 2, name: 'Category 2' }
            ])
        );
    }),

    // Mock the 'fetchCategoryProducts' call
    rest.get(`${BASE_URL}products`, (req, res, ctx) => {
        const categoryId = req.url.searchParams.get('category');
        if (categoryId === '1') {
            return res(
                ctx.status(200),
                ctx.json([
                    { id: 1, name: 'Category 1 - Product 1', price: 100 },
                    { id: 2, name: 'Category 1 - Product 2', price: 150 }
                ])
            );
        } else {
            return res(
                ctx.status(404),
                ctx.json({ error: 'No products found for this category' })
            );
        }
    }),

    // Simulate a failure for any request if needed
    rest.get(`${BASE_URL}products/fail`, (req, res, ctx) => {
        return res(
            ctx.status(500),
            ctx.json({ error: 'Internal Server Error' })
        );
    })
);