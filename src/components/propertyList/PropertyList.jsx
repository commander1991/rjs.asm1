import React from 'react';
import './PropertyList.scss'; // Import CSS styles for PropertyList component
import types from '../data/type.json'; // Import JSON data

const PropertyList = () => {
    return (
        <div className='pList'>
            {/* Map through each item in the types array */}
            {types.map((item, index) => (
                <div className="pListItem" key={index}>
                    {/* Image */}
                    <img src={item.image} className='pListImg' />
                    <div className="pListTitle">
                        {/* Name */}
                        <h1>{item.name}</h1>
                        {/* Count */}
                        <h2>{item.count} hotels</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PropertyList;

// PropertyList component render một danh sách các loại hình nghỉ dưỡng từ dữ liệu 
// trong tệp JSON. Mỗi loại bất động sản bao gồm một hình ảnh và một tiêu đề hiển thị 
// tên loại và số lượng khách sạn tương ứng.