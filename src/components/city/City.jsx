// Import styles for the City component
import "./City.scss";
// Import data for the cities from a JSON file
import city from '../data/city.json';

// City component definition
const City = () => {
    return (
        // Container for displaying cities
        <div className="cities">
            {/* Mapping through the city data to render city items */}
            {city.map((item, index) => (
                <div className="cityItem" key={index}>
                    {/* Displaying city image */}
                    <img src={item.image} className="cityImg" />
                    <div className="cityTitles">
                        {/* Displaying city name */}
                        <h1>{item.name}</h1>
                        {/* Displaying city subtext */}
                        <h2>{item.subText}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default City;

// Component City là một phần giao diện hiển thị các thành phố và thông tin liên quan.
// Nó sử dụng dữ liệu từ một tệp JSON để hiển thị các thành phố và thông tin tương ứng của chúng.
// Mỗi thành phố được hiển thị bằng một hình ảnh, tên thành phố và một văn bản phụ.