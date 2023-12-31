import React from 'react';
import { Product } from './SliderData';
import "../css/Upcoming.css";


const Upcoming = () => {
    return (
        <>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
            </head>
            
                <div className='container'>
                <h1 style={{color:"#58508d",text:"centre",fontSize:"26px",fontWeight:"bolder"}}>Upcoming Housing</h1>
           
                    <div className="row">
                        {Product.map((slide, ind) => {
                            console.log(slide)
                            return (
                                <div className="col-3 " style={{ marginBottom: "15px", position: "relative" }}>
                                    <div className="image-container">
                                        <img className="slid-img" src={slide.image} alt={ind} style={{ height: "500px", width: "100%" }} />
                                        <div className='col-title'>
                                            {slide.title}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            
        </>
    )
}

export default Upcoming;