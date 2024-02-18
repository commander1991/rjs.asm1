import "./Detail.scss"
import Navbar from "../../components/nav/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Subcribe from "../../components/subscribe/Subscribe"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import data from "../../components/data/detail.json"

const Detail = () => {
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="detailContainer">
        <div className="detailWrapper">
          <button className="bookNow">Reserve of Book Now!</button>
          <h1 className="detailTitle">{data.name}</h1>
          <div className="detailAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="detailDistance">
            {data.distance}
          </span>
          <span className="detailPriceHightLight">
            {data.price}
          </span>
          <div className="detailImages">
            {data.photos.map(item => (
              <div className="detailImgWrapper">
                <img src={item} alt='' className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="detailDetails">
            <div className="detailDetailsTexts">
              <h1 className="detailDetailsTitle">{data.title}</h1>
              <p className="detailDesc">{data.description}</p>
            </div>
            <div className="detailDetailsPrice">
              <h1>Prefect for a 9-night stay!</h1>
              <span>Located in the real hear of Krakow,
                this property has an exellent location score of 9.8!
              </span>
              <h2>
                <b>${data.nine_night_price}</b> (9 nights)
              </h2>
              <button>Reserve of Book Now!</button>
            </div>
          </div>
        </div>
        <Subcribe />
        <Footer />
      </div>
    </div>
  )
}

export default Detail
