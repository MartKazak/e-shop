import { DEFAULT_IMG_URL } from "../../infrastructure/config";
import { ProductModel } from "./product.model";

type Props = {
    product: ProductModel;
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function ProductForm({ product, onChangeValue }: Props) {

    return (
        <form id="add-product-form" className="product-form">
            <label>Price</label>
            <input id="product-price" className="form-control" type="text" name="price" value={product.price === 0 ? "" : product.price} onChange={onChangeValue} />

            <label>Title</label>
            <input id="product-title" className="form-control" type="text" name="title" value={product.title} onChange={onChangeValue} />

            <label>Description</label>
            <textarea id="product-description" className="form-control" rows={4} name="description" value={product.description} onChange={onChangeValue} />

            <label>Image url</label>
            <input id="product-img-url" className="form-control" type="text" name="imgUrl" value={product.imgUrl === DEFAULT_IMG_URL ? "" : product.imgUrl} onChange={onChangeValue} />

            <label>Show in slider</label>
            <input id="show-in-slider" className="form-control" type="checkbox" name="showInSlider" checked={product.showInSlider} onChange={onChangeValue} />
        </form>
    );
}