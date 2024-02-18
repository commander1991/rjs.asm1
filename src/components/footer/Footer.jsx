// Import the styles for the Footer component
import './Footer.scss';
// Import data for the footer from a JSON file
import data from '../data/footer.json';

// Footer component definition
const Footer = () => {
    return (
        // Container for the footer
        <div className='footerContainer'>
            {/* Unordered list for footer items */}
            <ul className="fList">
                {/* Mapping through the data to render footer columns */}
                {data.map(item => (
                    <li key={item.col_number}>
                        <ul>
                            {/* Mapping through the column values to render footer items */}
                            {item.col_values.map(value => (
                                <li className='fListItem' key={value}>{value}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Footer;

// Component Footer là một phần giao diện hiển thị thông tin cuối trang.
// Nó sử dụng dữ liệu từ một tệp JSON để hiển thị nội dung footer.
// Các dòng và cột được render bằng cách sử dụng các thành phần <ul> và <li> của HTML.