import { DEFAULT_IMG_URL } from "../../config";

export class ProductModel {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    showInSlider: boolean;

    constructor(
        id: number,
        title: string,
        description: string,
        price: number,
        imgUrl: string,
        showInSlider: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl || DEFAULT_IMG_URL
        this.showInSlider = showInSlider;
    }
}