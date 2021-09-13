import { useState, useEffect } from "react";
import { IProduct } from "../api/models/product";
import ProductsService from "../api/services/products";

export default function Products() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data: IProduct[] = await new ProductsService().getProducts();
                console.log(data)
                setProducts(data);
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