import React from 'react'
import './index.css'
import Navbar from '../common/navbar'
const Home=(props) => {
	let a=new Array(100).fill(0)
	return <div className="library">
		<Navbar {...props}/>
		<div className="filters">
			<div className="item">
				<div className="left-section">
					<span>All Image</span>
					<span>My Liked Images</span>
				</div>
			</div>
			<div className="item item-right">
				<div className="search">
					<input placeholder="search..."/>
					<i className="fa fa-search"></i>
				</div>
				<div className="filter">
					<button><i className="fa fa-sort"></i> Filter</button>
				</div>
			</div>
		</div>
		<div className="content">
			<div className="lib-flex">
				{a.map(x=>
					<div className="item">
						<div className="top">
							<h3>Image</h3>
							<input type="radio"/>
						</div>
						<div className="bottom">
							<img src="/assets/equation.png" alt=""/>
						</div>
					</div>
				)}
			</div>
		</div>
		<div className="operations">
			<button>Edit</button>
			<button>Rename</button>
			<button>Delete</button>
		</div>
	</div>
}
export default Home