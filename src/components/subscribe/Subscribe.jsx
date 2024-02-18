import React from 'react';
import './Subscribe.scss'; // Import CSS styles for Subscribe component

const Subscribe = () => {
    return (
        <div className='subscribeContainer'>
            {/* Title */}
            <h1 className="subTitle">Save time, save money!</h1>
            {/* Description */}
            <span className="subDesc">Sign up and we'll send the best deals to you</span>
            {/* Input field for email and subscribe button */}
            <div className="subInputContainer">
                <input type="text" placeholder='Your email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default Subscribe;

// Subscribe component render một phần tử div với class subscribeContainer.
// Nó chứa một tiêu đề (h1), mô tả (span) và một trường nhập (input) cho email
// cùng với nút Subscribe.