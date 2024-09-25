const STORE_ID = 108362264;
const TOKEN = "public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs";



export const fetchProducts = async (product: string) => {
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/${STORE_ID}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching product: ${response.statusText}`);
        }
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        throw error;
    }
};



export const fetchProductById = async (productId: string) => {
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/${STORE_ID}/products/${productId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching product: ${response.statusText}`);
        }
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        throw error; // Rethrow the error for the caller to handle
    }
};


