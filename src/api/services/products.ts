import { API_URL } from "../../config";
import httpClient from "../httpClient";
import { IProduct } from "../models/product";

export default class ProductsService {
    public async getProducts(): Promise<IProduct[]> {
        const products = await httpClient.get<IProduct[]>(API_URL);
        return products.data !== undefined ? products.data : [];
    }
}