import { useState } from "react";
import Modal from "../../components/modal/modal";
import { ProductModel } from "./product.model";
import ProductForm from "./productForm";

type Props = {
    product: ProductModel;
    onDeleteCallback: (id: number) => Promise<void>;
};

export default function ProductCard({ product, onDeleteCallback }: Props) {
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
    const toggleDeleteModalVisibility = () => setIsOpenDeleteModal(!isOpenDeleteModal);

    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
    const toggleEditModalVisibility = () => setIsOpenEditModal(!isOpenEditModal);

    return (
        <div className="card">
            <div className="card-image">
                <img alt="" src={product.imgUrl} />
            </div>
            <div className="card-body">
                <div hidden className="card-id">{product.id}</div>
                <div hidden className="card-show-in-slider">{product.showInSlider}</div>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-description">{product.description}</p>
                <p className="card-price">{product.price}</p>
            </div>
            <div className="card-footer">
                <button id="btn-update-product" className="btn btn-primary" type="button" onClick={toggleEditModalVisibility}>Edit</button>
                <button id="btn-delete-product" className="btn btn-danger" type="button" onClick={toggleDeleteModalVisibility}>Delete</button>
            </div>
            <Modal
                title={"Delete product"}
                isOpen={isOpenDeleteModal}
                onConfirm={async () => await onDeleteCallback(product.id)}
                onCancel={toggleDeleteModalVisibility}>
                Do you really want to delete product: {product.title} ?
            </Modal>
            <Modal
                title={"Edit product"}
                isOpen={isOpenEditModal}
                onConfirm={toggleEditModalVisibility}
                onCancel={toggleEditModalVisibility}>
                Edit product: {product.title} ?
                <ProductForm product={product} />
            </Modal>
        </div>
    );
}