import React from 'react';
import styled from "styled-components";
import Section from './Section';

const Home = () => {
	return (
		<>
			<Container>
				<Section 
				title="Model S"
				desc="Order Online for Touchless Delivery"
				leftbtn="Custom Order"
				rightbtn="Existing Inventory"
				img="model-s.jpg"
				/>
				<Section
				title="Model Y"
				desc="Order Online for Touchless Delivery"
				leftbtn="Custom Order"
				rightbtn="Existing Inventory"
				img="model-y.jpg" 
				/>
				<Section
				title="Model 3"
				desc="Order Online for Touchless Delivery"
				leftbtn="Custom Order"
				rightbtn="Existing Inventory"
				img="model-3.jpg" 
				/>
				<Section
				title="Model X"
				desc="Order Online for Touchless Delivery"
				leftbtn="Custom Order"
				rightbtn="Existing Inventory"
				img="model-x.jpg" 
				/>
				<Section
				title="Lowest Cost Solar Panels in America"
				desc="Money-back guarantee"
				leftbtn="Order Now"
				rightbtn="Learn More"
				img="solar-panel.jpg" 
				/>
				<Section
				title="Solar for New Roofs"
				desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
				leftbtn="Order Now"
				rightbtn="Learn More"
				img="solar-roof.jpg" 
				/>
				<Section
				title="Accessories"
				leftbtn="shop Now"
				img="accessories.jpg" 
				/>
				

				
			</Container>
		</>
	)
}

export default Home

const Container = styled.div`
height: 100vh;
`
