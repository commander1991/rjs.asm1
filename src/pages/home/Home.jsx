import React from 'react';
import NavBar from '../../components/nav/Navbar'; // Import NavBar component
import Header from '../../components/header/Header'; // Import Header component
import './Home.scss'; // Import CSS styles for Home component
import City from '../../components/city/City'; // Import City component
import PropertyList from '../../components/propertyList/PropertyList'; // Import PropertyList component
import Hotels from '../../components/hotel/Hotels'; // Import Hotels component
import Subscribe from '../../components/subscribe/Subscribe'; // Import Subscribe component
import Footer from '../../components/footer/Footer'; // Import Footer component

const HomePage = () => {
	return (
		<div>
			{/* Render NavBar component */}
			<NavBar />
			{/* Render Header component */}
			<Header />
			<div className="homeContainer">
				{/* Render City component */}
				<City />
				{/* Render title for property type */}
				<h1 className="homeTitle">Browse by property type</h1>
				{/* Render PropertyList component */}
				<PropertyList />
				{/* Render title for homes guests love */}
				<h1 className="homeTitle">Homes guests love</h1>
				{/* Render Hotels component */}
				<Hotels />
				{/* Render Subscribe component */}
				<Subscribe />
				{/* Render Footer component */}
				<Footer />
			</div>
		</div>
	);
};

export default HomePage;


// Đây là một trang chủ đơn giản với các thành phần như NavBar, Header, City, 
// PropertyList, Hotels, Subscribe và Footer. Mỗi thành phần được render ra màn hình
// dựa trên cấu trúc của trang và sắp xếp theo thứ tự tương ứng.