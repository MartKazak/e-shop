import { useState, useEffect } from "react";
import { ProductModel } from "./product.model";
import { getProducts, IProduct } from "./product.service";
import ProductCard from "./productCard";

export default function ProductList() {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data: IProduct[] = await getProducts();
                const products = data.map(p => new ProductModel(p.id, p.title, p.description, p.price, p.imgUrl, p.showInSlider));
console.log(products);
                setProducts(products);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    const deleteProduct = async (id: number) => {
        const filteredProducts = products.filter(p => p.id !== id);
        //await deleteProduct(id);
        setProducts(filteredProducts);
    };

    return (
        <div className="items-container">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onDeleteCallback={deleteProduct}/>
            ))}
        </div>
    );
}