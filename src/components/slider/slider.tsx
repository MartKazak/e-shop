import "./slider.css";

// type Props = {
//     slides: any;
// };

interface Slide {
    imgUrl: string;
    title: string;
    style: string;
}

export default function Slider() {
     const slides: Slide[] = [
        {
            title: "Product 1",
            imgUrl: "https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            style: ""
        },
        {
            title: "Product 2",
            imgUrl: "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            style: ""
        },
        {
            title: "Product 3",
            imgUrl: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            style: ""
        }
    ];

    //TODO: use state
    let currentSlide = 0;
    const slidesAmount = slides.length;

    const nextSlide = () => {
        if (currentSlide === slidesAmount - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }

        goToSlide(currentSlide);
        //this.#activateDot(this.#currentSlide);
    }

    const goToSlide = (slide: number) => {
        slides.forEach((s, i) =>
            (s.style = `translateX(${100 * (i - slide)}%)`)
        );
    }

    return (
        <div id="products-slider-container" className="slider">
             {slides.map((s, i) => (
                <div key={`slide-${i}`} className="slide" style={{ transform: `translateX(${i * 100}%)` }}>
                    <img  src={s.imgUrl} alt="" />
                    <div className="slide-title">
                        <p>{s.title}</p>
                    </div>
                </div>
            ))}

            <div className="dots">
                {slides.map((s, i) => (
                    <button key={`dot-${i}`} className="dots-dot dots-dot-active" data-slide={i}></button>
               ))}
            </div>
            <button className="slider-btn slider-btn-left">&larr;</button>
            <button className="slider-btn slider-btn-right">&rarr;</button>
        </div>
    );
}