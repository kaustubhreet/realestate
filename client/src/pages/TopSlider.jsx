import React, { useState } from 'react';
import "../css/TopSlider.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const TopSlider = (props) => {
    const data = props.alldata;
    const [curr, setCurr] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    }
    const prevSlide = () => {
        setCurr(curr === 0 ? length - 1 : curr - 1);
    }

    if (!Array.isArray(data) || data.length <= 0)
        return null;


    return (
        <>
            <div className='container-fluid slider mt-5'>
                <section >
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {data.map((slide, ind) => {
                        return (
                            <div className={ind === curr ? 'slide active' : 'slide'} key={slide._id}>
                                {ind === curr && (
                                    <img src={slide.imageUrls
                                    } alt={slide.name} className='images' />
                                )}
                            </div>
                        );
                    })};
                </section>
            </div>
        </>
    )
}

export default TopSlider