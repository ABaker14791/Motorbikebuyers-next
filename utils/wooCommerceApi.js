import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
	url: "https://akaautomotive.co.uk",
	consumerKey: process.env.WOOCOMMERCE_KEY,
	consumerSecret: process.env.WOOCOMMERCE_SECRET,
	version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
	try {
		const response = await api.get("products?category=31");
		return response;
	} catch (error) {
		throw new Error(error);
		// Todo: route to 404 page
	}
}

// fetch single product by id
export async function fetchWooCommerceSingle(id) {
	try {
		const response = await api.get(`products/${id}`);
		return response;
	} catch (error) {
		throw new Error(error);
	}
}
