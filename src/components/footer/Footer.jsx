import './Footer.scss'
import data from '../data/footer.json'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <ul className="fList">
                {data.map(item => (
                    <li key={item.col_number}>
                        {item.col_values.map(value => (
                            <li className='fListItem' key={value}>{value}</li>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Footer
