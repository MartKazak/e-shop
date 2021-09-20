import "./slider.css";
import { useState } from "react";
import { ProductModel } from "../../domain/products/product.model";

type Props = {
    slides: ProductModel[];
};

export default function Slider({ slides }: Props) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const slidesAmount = slides.length;

    const nextSlide = () => {
        const slideIndex = currentSlideIndex === slidesAmount - 1 ? 0 : currentSlideIndex + 1;
        setCurrentSlideIndex(slideIndex);
    };

    const previousSlide = () => {
        const slideIndex = currentSlideIndex === 0 ? slidesAmount - 1 :  currentSlideIndex - 1;
        setCurrentSlideIndex(slideIndex);
    };

    return (
        <div id="products-slider-container" className="slider">
            {slides.map((s, i) => (
                <div key={`slide-${i}`} className="slide" style={{ transform: `translateX(${100 * (i - currentSlideIndex)}%)` }}>
                    <img  src={s.imgUrl} alt="" />
                    <div className="slide-title">
                        <p>{s.title}</p>
                    </div>
                </div>
            ))}
            <div className="dots">
                {slides.map((_, i) => (
                    <button key={`dot-${i}`} className={"dots-dot " + (i === currentSlideIndex ? "dots-dot-active" : "")} onClick={() => setCurrentSlideIndex(i)}></button>
                ))}
            </div>
            <button className="slider-btn slider-btn-left" onClick={() => previousSlide()}>&larr;</button>
            <button className="slider-btn slider-btn-right" onClick={() => nextSlide()}>&rarr;</button>
        </div>
    );
}