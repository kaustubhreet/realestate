import React from 'react';
import "../css/BottomSlider.css";

const BottomSlider = (props) => {
    
  return (
    <>
    <div className='container-fluid'>
                <div className="slider-container">
                    <div className="slider-wrapper">
                        <div className="slider">
                            {props.saleListings.map((slide) => (
                                <div className="multiple-slider" key={slide._id}>
                                    <img className="slider-img" src={slide.imageUrls} alt={`slide ${slide.id}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BottomSlider