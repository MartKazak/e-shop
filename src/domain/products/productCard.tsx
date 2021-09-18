import { ProductModel } from "./product.model";

type Props = {
    product: ProductModel;
    onDeleteCallback: (id: number) => Promise<void>;
};

export default function ProductCard({ product, onDeleteCallback }: Props) {
    // const onDelete = async () => {
    //     // const addProductModal = new SimpleModal("Remove product", null, null, null, `<div id="product-delete-confimation"></div>`);
    //     // const modalResponse = await addProductModal.question();

    //     // if (modalResponse) {
    //     //     await onDeleteCallback(product.id);
    //     // }
    // };

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
                <button id="btn-delete-product" className="btn btn-danger" type="button" onClick={async () => onDeleteCallback(product.id)}>Delete</button>
            </div>
        </div>
    );
}