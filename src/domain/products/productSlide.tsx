import { ProductModel } from "./product.model";

type Props = {
    product: ProductModel;
};

export default function ProductSlide({product}: Props) {
    return (
        <>
        <img  src={product.imgUrl} alt="" />
        <div className="slide-title">
            <p>{product.title}</p>
        </div>
        </>
    );
}