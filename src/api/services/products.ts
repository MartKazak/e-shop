import httpClient from "../httpClient";

export default class ProductsService {
    public async getProducts() {
        const products = await httpClient.get("http://localhost:3000/products");
        console.log("P", products);

        return products;
    }
}