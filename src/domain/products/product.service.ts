import httpClient from "../../infrastructure/httpClient";
import { BASE_API_URL } from "../../infrastructure/config";

const productsUrl = `${BASE_API_URL}products/`;

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    showInSlider: boolean;
}

export function getProducts(): Promise<IProduct[]> {
    return httpClient.get<IProduct[]>(productsUrl);
}

export function deleteProduct(id: number): Promise<void> {
    return httpClient.xdelete(`${productsUrl}${id}`);
}