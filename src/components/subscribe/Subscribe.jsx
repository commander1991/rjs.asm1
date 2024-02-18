import './Subscribe.scss'

const Subscribe = () => {
    return (
        <div className='subscribeContainer'>
            <h1 className="subTitle">Save time, save money!</h1>
            <span className="subDesc">Sign up and we'll send the best deals to you</span>
            <div className="subInputContainer">
                <input type="text" placeholder='Your email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
