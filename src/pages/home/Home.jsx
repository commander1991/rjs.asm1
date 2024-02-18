import NavBar from '../../components/nav/Navbar'
import Header from '../../components/header/Header'
import './Home.scss'
import City from '../../components/city/City'
import PropertyList from '../../components/propertyList/PropertyList'
import Hotels from '../../components/hotel/Hotels'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
const HomePage = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<div className="homeContainer">
				<City />
				<h1 className="homeTitle">Browse by property type</h1>
				<PropertyList />
				<h1 className="homeTitle">Homes guests love</h1>
				<Hotels />
				<Subscribe />
				<Footer />
			</div>
		</div>
	);
};

export default HomePage
