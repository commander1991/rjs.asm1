import React from 'react';
import './Hotels.scss'; // Import CSS styles for Hotels component
import data from '../data/hotel_list.json'; // Import hotel data

const Hotels = () => {
    return (
        <div className='hotelContainer'>
            {/* Map through the hotel data to render each hotel */}
            {data.map((hotel, index) => (
                <div className="hotelItem" key={index}>
                    {/* Render hotel image */}
                    <img src={hotel.image_url} alt={hotel.name} className='hotelImg' />
                    {/* Render hotel name as a link to detail page */}
                    <a className="name" href='./detail'>{hotel.name}</a>
                    {/* Render hotel city */}
                    <span className="city">{hotel.city}</span>
                    {/* Render hotel price */}
                    <span className="price">Starting from ${hotel.price}</span>
                    <div className="rating">
                        {/* Render hotel rating */}
                        <button>{hotel.rate}</button>
                        {/* Render hotel type */}
                        <span>{hotel.type}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Hotels;

// Hotels component hiển thị danh sách khách sạn từ dữ liệu hotel_list.json. 
// Mỗi khách sạn được hiển thị với hình ảnh, tên (dưới dạng liên kết đến trang chi tiết), 
// thành phố, giá cả, xếp hạng và loại.