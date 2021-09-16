import "./slider.css";
import { useState } from "react";
import { ProductModel } from "../../domain/products/product.model";

export default function Slider() {
     const slides: ProductModel[] = [
        {
            description: "description updated",
            id: 1,
            imgUrl: "https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            price: 100,
            showInSlider: true,
            title: "Product 1456",
        },
        {
            description: "Product 2 description",
            id: 2,
            imgUrl: "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            price: 200,
            showInSlider: true,
            title: "Product 2"
        },
        {
            description: "Product 3 description",
            id: 3,
            imgUrl: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            price: 300,
            showInSlider: true,
            title: "Product 3"
        }
    ];

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