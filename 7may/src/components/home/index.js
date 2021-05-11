import React from 'react'
import Navbar from '../common/navbar'

const Home=() => {
	return <div>
		<Navbar/>
		<div className="home-flex">
			<div className="left">
				<div className="icon">
					<img src="/assets/upload-workbook.png" alt=""/>	
					<h5>new user</h5>
				</div>
			</div>
			<div className="right">
				<img src="/assets/create-workbook.png" alt=""/>	
				<h5>existing user</h5>
			</div>
		</div>
	</div>
}
export default Home