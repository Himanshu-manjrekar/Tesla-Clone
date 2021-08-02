import React, { useState } from 'react'
import styled from "styled-components" 
import {RiCloseLine} from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi"
import { selectCars } from "../features/Car/CarSlice";
import { useSelector } from 'react-redux';


const Header = () => {

const [burgerStatus, setBurgerStatus] = useState(false)
const cars = useSelector(selectCars);
console.log(cars);

	return (
		<Container>
			<a href="#">
				<img src="/images/logo.svg" alt="Logo"/>  
			</a>
			<Menu>

				{cars && cars.map((car, index )=>(
					<a key={index} href="#">{car}</a>
				))}
			
			</Menu>
			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<CustomMenu onClick={() => setBurgerStatus(true) }/>	
			</RightMenu>
			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerStatus(false) }/>
				</CloseWrapper>
				<li><a href="#">Existing Inventory</a></li>
				<li><a href="#">Used Inventory</a></li>
				<li><a href="#">Trade-in</a></li>
				<li><a href="#">Cyber Truck</a></li>
				<li><a href="#">Roadster</a></li>
				<li><a href="#">Semi</a></li>
				<li><a href="#">charging</a></li>
				<li><a href="#">powerwall</a></li>
				<li><a href="#">commercial energy</a></li>
				<li><a href="#">utilities</a></li>
				<li><a href="#">test drive</a></li>
				<li><a href="#">find us</a></li>
				<li><a href="#">Support</a></li>
				
			</BurgerNav>
		</Container>
	)
}

export default Header


const Container = styled.div `
	z-index:1;
	min-height:  60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top:0;
	left: 0;
	right: 0;
`
const Menu = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 1rem;

	}

	@media (max-width:768px) {
		display:none;
	}
`

const RightMenu = styled.div `
	display: flex;
	align-items: center;
a {
	font-weight: 600;
	text-transform: uppercase;
	margin-right: 10px;
}
`

const CustomMenu = styled(GiHamburgerMenu)`
	cursor: pointer;
`
const BurgerNav = styled.div `
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: white;
	width: 300px;
	z-index: 100;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
	transition: transform 0.4s ease-in-out;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		text-transform: uppercase;

		a {
			font-weight: 600;
			
		}
	}
`

const CustomClose = styled(RiCloseLine) `
	cursor: pointer;
`

const CloseWrapper = styled.div `
	display: flex;
	justify-content: flex-end;
`