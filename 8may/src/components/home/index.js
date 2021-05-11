import React from 'react'
import './index.css'
import Navbar from '../common/navbar'
const Home=(props) => {
	return <div>
		<Navbar {...props}/>
		<div className="home-flex">
			<div className="left">
				<div className="icon">
					<img src="/assets/upload-workbook.PNG" alt=""/>	
					<h5>new user</h5>
				</div>
				<div className="form-group">
					<strong>Upload Image</strong>
					<div className="flex">
						<input placeholder="no image selected "/>
						<button>Browse</button>
					</div>
					<div className="flex">
						<small>Supported file type</small>	
						<small>Download Sample</small>	
					</div>
				</div>
				<div className="form-group">
					<strong>Subject</strong>
					<div className="flex">
						<select name="" id="">
							<option value="">Select Subject</option>
						</select>
						<button className="btn-circle">Go</button>
					</div>
				</div>
				

			</div>
			<div className="right">
				<div className="icon">
					<img src="/assets/create-workbook.PNG" alt=""/>	
					<h5>existing user</h5>
					
				</div>
				<div className="form-group">
					<strong>Workbook Title</strong>
					<div className="flex">
						<input placeholder="Enter Workbook Title"/>
						
					</div>
					
				</div>
				<br/>
				<br/>
				<button className="btn-circle">Go</button>
			</div>
		</div>
	</div>
}
export default Home