import { useState, useEffect } from "react";
import ProductsService from "../api/services/products";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await new ProductsService().getProducts();
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