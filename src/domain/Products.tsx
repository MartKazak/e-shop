import { useState, useEffect } from "react";
import { ProductModel } from "./products/product.model";
import { getProducts, IProduct } from "./products/product.service";

export default function Products() {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data: IProduct[] = await getProducts();
                const products = data.map(p => new ProductModel(p.id, p.title, p.description, p.price, p.imgUrl, p.showInSlider));
                console.log(products)
                setProducts(products);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    return (
        <div>PRODUCTS:
            {JSON.stringify(products, null, 4)}
        </div>
    )
}