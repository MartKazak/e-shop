import { useState } from "react";
import Modal from "../../components/modal/modal";
import { ProductModel } from "./product.model";

type Props = {
    product: ProductModel;
    onDeleteCallback: (id: number) => Promise<void>;
};

export default function ProductCard({ product, onDeleteCallback }: Props) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const toggleModalVisibility = () => setIsOpenModal(!isOpenModal);

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
                <button id="btn-update-product" className="btn btn-primary" type="button">Edit</button>
                <button id="btn-delete-product" className="btn btn-danger" type="button" onClick={toggleModalVisibility}>Delete</button>
            </div>
            <Modal
                title={"Delete product"}
                isOpen={isOpenModal}
                onConfirm={async () => await onDeleteCallback(product.id)}
                onCancel={toggleModalVisibility}>
                Do you really want to delete product: {product.title} ?
            </Modal>
        </div>
    );
}