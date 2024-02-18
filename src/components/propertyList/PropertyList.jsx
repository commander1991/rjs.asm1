import './PropertyList.scss'
import types from '../data/type.json'

const PropertyList = () => {
    return (
        <div className='pList'>
            {types.map(item => (
                <div className="pListItem">
                    <img src={item.image} className='pListImg' />
                    <div className="pListTitle">
                        <h1>{item.name}</h1>
                        <h2>{item.count} hotels</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PropertyList
