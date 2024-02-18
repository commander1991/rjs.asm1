import React from 'react';
import "./Detail.scss"; // Import CSS styles for Detail component
import Navbar from "../../components/nav/Navbar"; // Import Navbar component
import Header from "../../components/header/Header"; // Import Header component
import Footer from "../../components/footer/Footer"; // Import Footer component
import Subscribe from "../../components/subscribe/Subscribe"; // Import Subscribe component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon from @fortawesome/react-fontawesome
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; // Import faLocationDot icon from @fortawesome/free-solid-svg-icons
import data from "../../components/data/detail.json"; // Import data from detail.json file

const Detail = () => {
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render Header component with type prop set to 'list' */}
      <Header type='list' />
      <div className="detailContainer">
        <div className="detailWrapper">
          {/* Button for booking */}
          <button className="bookNow">Reserve or Book Now!</button>
          {/* Detail title */}
          <h1 className="detailTitle">{data.name}</h1>
          {/* Detail address */}
          <div className="detailAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          {/* Detail distance */}
          <span className="detailDistance">{data.distance}</span>
          {/* Detail price */}
          <span className="detailPriceHightLight">{data.price}</span>
          {/* Detail images */}
          <div className="detailImages">
            {/* Map through photos and display each image */}
            {data.photos.map((item, index) => (
              <div className="detailImgWrapper" key={index}>
                <img src={item} alt='' className="hotelImg" />
              </div>
            ))}
          </div>
          {/* Detail details */}
          <div className="detailDetails">
            {/* Detail text */}
            <div className="detailDetailsTexts">
              <h1 className="detailDetailsTitle">{data.title}</h1>
              <p className="detailDesc">{data.description}</p>
            </div>
            {/* Detail price */}
            <div className="detailDetailsPrice">
              <h1>Prefect for a 9-night stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
              <h2><b>${data.nine_night_price}</b> (9 nights)</h2>
              {/* Button for booking */}
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        {/* Render Subscribe component */}
        <Subscribe />
        {/* Render Footer component */}
        <Footer />
      </div>
    </div>
  );
}

export default Detail;

// Các thành phần như Navbar, Header, Footer, và Subscribe được import và render ra màn hình.
// Dữ liệu cho trang chi tiết được lấy từ file JSON và hiển thị thông qua các phần tử HTML và CSS được định nghĩa trong file SCSS tương ứng.