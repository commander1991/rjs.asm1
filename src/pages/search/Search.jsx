import './Search.scss'; // Import CSS stylesheet for Search component
import Header from '../../components/header/Header'; // Import Header component
import Navbar from '../../components/nav/Navbar'; // Import Navbar component
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router
import { useState } from 'react'; // Import useState hook from React
import { format } from 'date-fns'; // Import format function from date-fns library
import { DateRange } from 'react-date-range'; // Import DateRange component from react-date-range library
import SearchItem from '../../components/searchItem/SearchItem'; // Import SearchItem component
import Subscribe from '../../components/subscribe/Subscribe'; // Import Subscribe component
import Footer from '../../components/footer/Footer'; // Import Footer component

const Search = () => {
  // Get location object using useLocation hook
  const location = useLocation();
  console.log(location);

  // Initialize state variables with data from location state
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render Header component with 'list' type */}
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            {/* Render search form */}
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination}></input>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={setOpenDate.bind(this, !openDate)}>
                {/* Format and display check-in date */}
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {/* Render DateRange component for selecting date */}
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            {/* Render options for search */}
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                {/* Render input fields for options */}
                {/* Min price */}
                <div className='lsOptionItem'>
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                {/* Max price */}
                <div className='lsOptionItem'>
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                {/* Adult */}
                <div className='lsOptionItem'>
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>
                {/* Children */}
                <div className='lsOptionItem'>
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                {/* Room */}
                <div className='lsOptionItem'>
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
            {/* Render search button */}
            <button>Search</button>
          </div>
          {/* Render search results */}
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
      {/* Render Subscribe and Footer components */}
      <div className="footer">
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Search;

// Đây là một phần mã React cho trang Search. Bên trong hàm Search, 
// chúng ta sử dụng hook useState để theo dõi trạng thái của destination, 
// date, openDate và options, và sử dụng các giá trị từ location.state để
// khởi tạo các giá trị ban đầu. Chúng ta sử dụng các thành phần React như
// Header, Navbar, DateRange, SearchItem, Subscribe và Footer để hiển thị 
// nội dung của trang Search.
