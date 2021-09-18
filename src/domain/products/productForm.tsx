import { useForm } from "../../hooks/useForm";
import { ProductModel } from "./product.model";

type Props = {
    product: ProductModel;
};

export default function ProductForm({product}: Props) {
    const { onChange, onSubmit, values } = useForm(
        saveProductCallback,
        product
    );

    async function saveProductCallback() {
        console.log(values);
    }

    return (
        <form id="add-product-form" className="product-form">
            <input id="product-id" name="id" type="hidden" value="" />
            <input id="product-show-in-slider" type="hidden" name="showInSlider" value="false" />

            <label>Price</label>
            <input id="product-price" className="form-control" type="text" name="price"  onChange={onChange} />

            <label>Title</label>
            <input id="product-title" className="form-control" type="text" name="title"  onChange={onChange} />

            <label>Description</label>
            <textarea id="product-description" className="form-control" rows={4} name="description" value="" />

            <label>Image url</label>
            <input id="product-img-url" className="form-control" type="text" name="imgUrl" value="" />

            <label>Show in slider</label>
            <button id="btn-toggle-slider-option" className="btn btn-default" type="button">Add to slider</button>
        </form>
    );
};