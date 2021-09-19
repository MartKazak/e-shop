import { ProductModel } from "./product.model";

type Props = {
    product: ProductModel;
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function ProductForm({ product, onChangeValue }: Props) {

    return (
        <form id="add-product-form" className="product-form">
            <label>Price</label>
            <input id="product-price" className="form-control" type="text" name="price" value={product.price} onChange={onChangeValue} />

            <label>Title</label>
            <input id="product-title" className="form-control" type="text" name="title" value={product.title} onChange={onChangeValue} />

            <label>Description</label>
            <textarea id="product-description" className="form-control" rows={4} name="description" value={product.description} onChange={e => onChangeValue(e)} />

            <label>Image url</label>
            <input id="product-img-url" className="form-control" type="text" name="imgUrl" value={product.imgUrl} onChange={onChangeValue} />

            <label>Show in slider</label>
            <button id="btn-toggle-slider-option" className="btn btn-default" type="button"></button>
        </form>
    );
}