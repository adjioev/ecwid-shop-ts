import { http } from 'msw'

const ECWID_BASE_URL = 'https://app.ecwid.com/api/v3/108362264';

export const handlers = [
    http.get(`${ECWID_BASE_URL}/products/12345`, async (req, res, ctx) => {
        const { id } = req.params;
        if (id === '12345') {
            return res(
                ctx.status(500),
                ctx.json({ error: 'Internal Server Error for product ID 12345' })
            );
        }
    }),
];
