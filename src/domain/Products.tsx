import { useState, useEffect } from "react";
import ProductsService from "../api/services/products";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        new ProductsService().getProducts()
            .then(data => setProducts(data));
    }, []);

    return (
        <div>PRODUCTS:
            {JSON.stringify(products, null, 4)}
        </div>
    )
}