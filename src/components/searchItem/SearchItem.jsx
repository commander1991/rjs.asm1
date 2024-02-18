import './SearchItem.scss'
import data from '../data/search.json'

const SearchItem = () => {
    return (
        <>
            {data.map(item => (
                <div className='searchItem'>
                    <img
                        src={item.image_url}
                        alt=''
                        className='siImg'
                    />
                    <div className="siDesc">
                        <h1 className='siTitle'>{item.name}</h1>
                        <span className="siDistance">{item.distance}</span>
                        <span className="siTaxiOp">{item.tag}</span>
                        <span className="siSubtitle">{item.description}</span>
                        <span className="siFeatures">{item.type}</span>
                        <span className="siCancelOp">{item.free_cancel === true ? "Free cancellation" : ""}</span>
                        <span className="siCancelOpSubtitle">
                            {item.free_cancel === true ?
                                "You can cancel later, so lock in this great price today!" :
                                ""}
                        </span>
                    </div>
                    <div className="siDetails">
                        <div className="siRating">
                            <span>{item.rate_text}</span>
                            <button>{item.rate}</button>
                        </div>
                        <div className="siDetailTexts">
                            <span className="siPrice">${item.price}</span>
                            <span className="siTaxOp">Includes taxes and fees</span>
                            <button className="siCheckButton">See availability</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SearchItem
