import { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import  './Navbar.css';
import {MenuData} from "./MenuData";
import Logo from './img/casologo.png';

class Navbar extends Component {
	 state = {clicked: false};
	 handleClick =()=> {
		this.setState({clicked: !this.state.clicked})
	}
    render() {
  return (
	<nav className='nav_barr'>
		<div className='caso_logo'>
			<img src={Logo} alt='CASO Research Logo' />
		</div>
		<div className='menu-icon' onClick={this.handleClick}>
			<i className={this.state.clicked ? "fas fa-close" : "fas fa-bars"}></i>
		</div>
		<ul className={this.state.clicked ?
			"nav_menu active" : "nav_menu"
		}>
			{MenuData.map ((item, index) => {
				return(
					<li key={index}>
						<NavLink to={item.url} className={item.cName}>{item.title}</NavLink>
					</li>
				)
			})}
		</ul>
	</nav>
  );
}
}

export default Navbar;