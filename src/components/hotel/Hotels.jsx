import React from 'react';
import './Hotels.scss'
import data from '../data/hotel_list.json'
const Hotels = () => {
    return (
        <div className='hotelContainer'>
            {data.map(hotel =>
                <div className="hotelItem" key={hotel.id}>
                    <img src={hotel.image_url} className='hotelImg'></img>
                    <span className="name">{hotel.name}</span>
                    <span className="city">{hotel.city}</span>
                    <span className="price">Starting from ${hotel.price}</span>
                    <div className="rating">
                        <button>{hotel.rate}</button>
                        <span>{hotel.type}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hotels
