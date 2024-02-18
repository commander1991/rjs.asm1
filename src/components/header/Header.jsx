// Import necessary libraries and styles for the Header component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import './Header.scss'; // Import styles for the Header component
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"; // Import specific solid icons from FontAwesome
import { DateRange } from 'react-date-range'; // Import DateRange component from react-date-range library
import { useState } from 'react'; // Import useState hook from React
import 'react-date-range/dist/styles.css'; // Import styles for react-date-range component
import 'react-date-range/dist/theme/default.css'; // Import default theme for react-date-range component
import { format } from 'date-fns'; // Import format function from date-fns library for date formatting
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom for programmatic navigation
import navBar from '../data/navBar.json'; // Import navigation bar data from a JSON file

// Header component definition
const Header = ({ type }) => {
    // Initialize navigate function for programmatic navigation
    const navigate = useNavigate();
    // Initialize state variables and their setters
    const [destination, setDestination] = useState(""); // State variable for destination input
    const [openDate, setOpenDate] = useState(false); // State variable for date picker visibility
    const [date, setDate] = useState([ // State variable for date range
        {
            startDate: new Date(), // Start date initialized to current date
            endDate: new Date(), // End date initialized to current date
            key: 'selection' // Key for the date range selection
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false); // State variable for options visibility
    const [options, setOptions] = useState({ // State variable for search options
        adult: 1, // Number of adults
        children: 0, // Number of children
        room: 1 // Number of rooms
    });

    // Function to handle incrementing or decrementing options
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1, // Increment or decrement based on the operation
            }
        })
    };

    // Function to handle search button click
    const handleSearch = () => {
        navigate("/search", { state: { destination, date, options } }); // Navigate to search page with search parameters
    };

    // Function to render icon based on icon name
    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'fa-bed': // Bed icon
                return faBed;
            case 'fa-plane': // Plane icon
                return faPlane;
            case 'fa-car': // Car icon
                return faCar;
            case 'fa-taxi': // Taxi icon
                return faTaxi;
            default:
                return null; // Return null if icon name doesn't match any
        }
    };

    return (
        // Header component JSX structure
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"} >
                <div className="headerList">
                    {/* Mapping through the navigation bar items */}
                    {navBar.map((item, index) => (
                        <div className={`headerListItem ${item.active ? 'active' : ''}`} key={index}>
                            <FontAwesomeIcon icon={renderIcon(item.icon)} /> {/* Render the icon based on the item's icon */}
                            <span>{item.type}</span> {/* Display the item type */}
                        </div>
                    ))}
                </div>
                {/* Rendering additional content if the type is not "list" */}
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">A lifetime of discount? It's Genius.</h1> {/* Header title */}
                        <p className="headerDesc">
                            Get rewarded for your travels - unlock instant
                            savings of 10% or more with a free account
                        </p> {/* Header description */}
                        <button className="headerBtn">Sign in / Register</button> {/* Button for signing in or registering */}
                        <div className="headerSearch">
                            {/* Search input field */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className='headerIcon' /> {/* Bed icon */}
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)} // Handling input change
                                />
                            </div>
                            {/* Date range selection */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' /> {/* Calendar icon */}
                                <span onClick={setOpenDate.bind(this, !openDate)} className='headerSearchText'>
                                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                                </span> {/* Displaying selected date range */}
                                {openDate && ( // Displaying DateRange component if openDate is true
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className='date'
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
                            {/* Options for number of adults, children, and rooms */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className='headerIcon' /> {/* Person icon */}
                                <span onClick={setOpenOptions.bind(this, !openOptions)} className='headerSearchText'>{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span> {/* Displaying selected options */}
                                {openOptions && ( // Displaying options menu if openOptions is true
                                    <div className="options">
                                        {/* Option for adults */}
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.adult <= 1}
                                                    className="optionCounterBtn"
                                                    onClick={handleOption.bind(this, 'adult', 'd')}>-
                                                </button> {/* Decrement button for adults */}
                                                <span className="optionCounterNumber">{options.adult}</span> {/* Display number of adults */}
                                                <button
                                                    className="optionCounterBtn"
                                                    onClick={handleOption.bind(this, 'adult', 'i')}>+
                                                </button> {/* Increment button for adults */}
                                            </div>
                                        </div>
                                        {/* Option for children */}
                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.children <= 0}
                                                    className="optionCounterBtn"
                                                    onClick={handleOption.bind(this,'children', 'd')}>-
                                                </button> {/* Decrement button for children */}
                                                <span className="optionCounterNumber">{options.children}</span> {/* Display number of children */}
                                                <button
                                                    className="optionCounterBtn"
                                                    onClick={handleOption.bind(this,'children', 'i')}>+
                                                </button> {/* Increment button for children */}
                                            </div>
                                        </div>
                                        {/* Option for rooms */}
                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.room <= 1}
                                                    className="optionCounterBtn"
                                                    onClick={handleOption.bind(this, 'room', 'd')}>-
                                                </button> {/* Decrement button for rooms */}
                                                <span className="optionCounterNumber">{options.room}</span> {/* Display number of rooms */}
                                                <button
                                                    className="optionCounterBtn"
                                                    onClick={handleOption.bind(this, 'room', 'i')}>+
                                                </button> {/* Increment button for rooms */}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Search button */}
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button> {/* Button for triggering search */}
                            </div>
                        </div>
                    </>}
            </div>
        </div>

    )
}

export default Header

// Đoạn mã trên là một thành phần giao diện(component) React được gọi là Header, được sử dụng để hiển thị tiêu đề và thanh điều hướng của trang web.Dưới đây là một giải thích chi tiết về mã:

// 1. Import và Khai báo biến:
// - Import các thư viện và styles cần thiết cho thành phần Header, bao gồm các icon từ thư viện FontAwesome, component DateRange từ thư viện react - date - range, hook useState từ React, và các styles từ các file CSS.
// - Import dữ liệu thanh điều hướng từ một file JSON.

// 2. Component Header:
// - Header là một hàm(functional component) nhận props type để xác định kiểu hiển thị của header.
// - Trong Header, chúng ta sử dụng hook useState để lưu trữ trạng thái của thành phần, bao gồm thông tin về đích đến, trạng thái mở của cửa sổ chọn ngày, thời gian, và các tùy chọn tìm kiếm.
// - Các hàm handleOption và handleSearch được sử dụng để xử lý thay đổi trong các tùy chọn tìm kiếm và khi người dùng bấm nút tìm kiếm.
// - Hàm renderIcon được sử dụng để render các icon dựa trên tên của chúng.
// - Phần JSX của Header bao gồm các thành phần hiển thị như thanh điều hướng, tiêu đề, mô tả, nút đăng nhập / đăng ký, các ô tìm kiếm và các tùy chọn tìm kiếm.

// 3. Điều kiện hiển thị:
// - Các phần của header được hiển thị dựa trên giá trị của props type.Nếu type không phải là "list", các phần bổ sung như tiêu đề, mô tả, nút đăng nhập / đăng ký và các tùy chọn tìm kiếm sẽ được hiển thị.