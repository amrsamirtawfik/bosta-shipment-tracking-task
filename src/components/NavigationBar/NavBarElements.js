import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import TrackYourShipment from '../../pages/TrackYourShipment';

export const Nav = styled.nav`
background: #fff;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
font-weight: 700;
height:50px;

@media screen and (max-width: 768px) {
	flex-direction:column;

}
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}


`;

export const PopUpNavLink =styled.div`

`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
color:#E30613;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
 @media screen and (max-width: 768px) {
    display: ${props => (props.isOpen ? "flex" : "none")}; // Use isOpen prop here
	flex-direction: column;
    align-items: center;
    gap: 3em;
    flex-wrap: nowrap;
    padding: 75px;
    font-weight: bold;
  }
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
cursor:pointer;
transition: background-color: 0.3s ease;
&:hover{
	color: #808080;
}
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
