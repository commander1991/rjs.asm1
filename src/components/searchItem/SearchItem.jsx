import React from 'react';
import './SearchItem.scss'; // Import CSS styles for SearchItem component
import data from '../data/search.json'; // Import JSON data

const SearchItem = () => {
    return (
        <>
            {/* Map through each item in the data array */}
            {data.map((item, index) => (
                <div className='searchItem' key={index}>
                    {/* Image */}
                    <img
                        src={item.image_url}
                        alt=''
                        className='siImg'
                    />
                    <div className="siDesc">
                        {/* Title */}
                        <h1 className='siTitle'>{item.name}</h1>
                        {/* Distance */}
                        <span className="siDistance">{item.distance} from center</span>
                        {/* Tag */}
                        <span className="siTaxiOp">{item.tag}</span>
                        {/* Description */}
                        <span className="siSubtitle">{item.description}</span>
                        {/* Type */}
                        <span className="siFeatures">{item.type}</span>
                        {/* Free cancellation */}
                        <span className="siCancelOp">{item.free_cancel === true ? "Free cancellation" : ""}</span>
                        {/* Free cancellation subtitle */}
                        <span className="siCancelOpSubtitle">
                            {item.free_cancel === true ?
                                "You can cancel later, so lock in this great price today!" :
                                ""}
                        </span>
                    </div>
                    {/* Details */}
                    <div className="siDetails">
                        {/* Rating */}
                        <div className="siRating">
                            <span>{item.rate_text}</span>
                            <button>{item.rate}</button>
                        </div>
                        {/* Price */}
                        <div className="siDetailTexts">
                            <span className="siPrice">${item.price}</span>
                            {/* Tax and fees */}
                            <span className="siTaxOp">Includes taxes and fees</span>
                            {/* Availability button */}
                            <button className="siCheckButton">See availability</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SearchItem;

// SearchItem component render một danh sách các mục tìm kiếm dựa trên 
// dữ liệu từ tệp JSON. Mỗi mục có một hình ảnh, mô tả và các chi tiết liên quan.