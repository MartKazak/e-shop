import { useState, useEffect } from "react";
import Modal from "../../components/modal/modal";
import Slider from "../../components/slider/slider";
import { ProductModel } from "./product.model";
import { createProduct, deleteProduct, getProducts, IProduct, updateProduct } from "./product.service";
import ProductCard from "./productCard";
import ProductForm from "./productForm";

export default function ProductList() {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const initialNewProductState = new ProductModel(0, "", "", 0, "", false);
    const [newProduct, setNewProduct] = useState<ProductModel>(initialNewProductState);

    const toggleModalVisibility = (): void => {
        setIsOpenModal(!isOpenModal);
        setNewProduct(initialNewProductState);
    };

    useEffect(() => {
        async function fetchData(): Promise<void> {
            try {
                const data = await getProducts();
                const products = data.map(p => new ProductModel(p.id, p.title, p.description, p.price, p.imgUrl, p.showInSlider));
                setProducts(products);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    const deleteProductCallback = async (id: number) => {
        await deleteProduct(id);
        const filteredProducts = products.filter(p => p.id !== id);
        setProducts(filteredProducts);
    };

    const updateProductCallback = async (product: ProductModel): Promise<void> => {
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

    const createProductCallback = async (): Promise<void> => {
        const result = await createProduct({
            title: newProduct.title,
            description: newProduct.description,
            price: newProduct.price,
            imgUrl: newProduct.imgUrl,
            showInSlider: newProduct.showInSlider
        } as IProduct);

        newProduct.id = result.id;

        products.unshift(newProduct)
        setProducts(products);
        toggleModalVisibility();
    }

    const onChangeNewProduct = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    }

    return (
        <>
        <Slider slides={products.filter(p => p.showInSlider)}/>
        <div className="add-product-container">
            <button id="btn-add-product" className="btn btn-default" type="button" onClick={() => toggleModalVisibility()}>+ Add product</button>
        </div>
        <Modal
            title={"Add product"}
            isOpen={isOpenModal}
            onConfirm={async () => await createProductCallback()}
            onCancel={toggleModalVisibility}>
            <ProductForm product={newProduct} onChangeValue={onChangeNewProduct}/>
        </Modal>
        <div className="items-container">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onDeleteCallback={deleteProductCallback} onUpdateCallback={updateProductCallback}/>
            ))}
        </div>
        </>
    );
}