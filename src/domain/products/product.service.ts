import httpClient from "../../infrastructure/httpClient";
import { BASE_API_URL } from "../../config";

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    showInSlider: boolean;
}

const productsUrl = `${BASE_API_URL}products/`;

export function getProducts(): Promise<IProduct[]> {
    return httpClient.get<IProduct[]>(productsUrl);
}