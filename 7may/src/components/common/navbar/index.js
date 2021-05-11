import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
const Navbar=() => {
	return <nav>
		<div className="left">
			<div className="logo">
				<img src="/assets/logo.png" alt=""/>
			</div>
			<div className="link">
				<Link to="/Home">
				 <i className="fa fa-2x fa-home"></i>	  Home
				</Link>
			</div>
			<div className="link">
				<Link to="/Home">
				 <i className="fa fa-2x fa-bookmark"></i>	  My Library
				</Link>
			</div>
			<div className="link">
				<Link to="/Home">
				 <i className="fa fa-2x fa-video"></i>	  Tutorial
				</Link>
			</div>
		</div>
		<div className="right">	
			<img src="/assets/avatar.png" alt=""/>
			<strong>Welcome User</strong>	
			<img src="/assets/fa-down.png" alt=""/>
		</div>
	</nav>
}
export default Navbar