import { useState, useEffect } from "react";
import { ProductModel } from "./product.model";
import { getProducts, IProduct, updateProduct } from "./product.service";
import ProductCard from "./productCard";

export default function ProductList() {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data: IProduct[] = await getProducts();
                const products = data.map(p => new ProductModel(p.id, p.title, p.description, p.price, p.imgUrl, p.showInSlider));
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

    const updateProductCallback = async (product: ProductModel) => {
        await updateProduct({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            imgUrl: product.imgUrl,
            showInSlider: product.showInSlider
        } as IProduct);
        const updatedProducts = products.map(p => {
            if (p.id === product.id) {
                return {
                    ...p,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    imgUrl: product.imgUrl,
                    showInSlider: product.showInSlider
                } as ProductModel;
            }

            return p;
        });

        setProducts(updatedProducts);
    }

    return (
        <div className="items-container">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onDeleteCallback={deleteProduct} onUpdateCallback={updateProductCallback}/>
            ))}
        </div>
    );
}