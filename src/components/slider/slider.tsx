import { useState } from "react";
import "./slider.css";

// type Props = {
//     slides: any;
// };

interface Slide {
    imgUrl: string;
    title: string;
}

export default function Slider() {
     const slides: Slide[] = [
        {
            title: "Product 1",
            imgUrl: "https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",

        },
        {
            title: "Product 2",
            imgUrl: "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",

        },
        {
            title: "Product 3",
            imgUrl: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",

        }
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    //TODO: use state
    //let currentSlide = 0;
    const slidesAmount = slides.length;

    const nextSlide = () => {
        //TODO: is it ok to set state in condition as here ??????????
        if (currentSlideIndex === slidesAmount - 1) {
            setCurrentSlideIndex(0);
        } else {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    }

    const previousSlide = () => {
        if (currentSlideIndex === 0) {
            setCurrentSlideIndex(slidesAmount - 1);
        } else {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    }

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
                    // TODO: is it OK mutate state here
                <button key={`dot-${i}`} className={"dots-dot " + (i === currentSlideIndex ? "dots-dot-active" : "")} onClick={() => setCurrentSlideIndex(i)}></button>
               ))}
            </div>
            <button className="slider-btn slider-btn-left" onClick={() => previousSlide()}>&larr;</button>
            <button className="slider-btn slider-btn-right" onClick={() => nextSlide()}>&rarr;</button>
        </div>
    );
}