import "./City.scss"
import city1 from "../../components/images/city_1.webp"
import city2 from "../../components/images/city_2.webp"
import city3 from "../../components/images/city_3.webp"
import city from '../data/city.json'

const City = () => {
    return (
        <div className="cities">
            {city.map((item, index) => (
                <div className="cityItem" key={index}>
                    <img src={item.image} className="cityImg" />
                    <div className="cityTitles">
                        <h1>{item.name}</h1>
                        <h2>{item.subText}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default City