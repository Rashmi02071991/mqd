import React from 'react'
import './index.css'
import Navbar from '../common/navbar'
import Button from '../common/button'
import Input from '../common/input'

class Upload extends React.Component
{
	render()
	{

	return <div>
		<Navbar {...this.props}/>
		<div className="upload-flex">
			<div className="title">Chemical Reaction</div>
			<div className="image">
				<img src="/assets/chemical-reaction.PNG" alt=""/>
				<div className="overlay"></div>
				<div className="note">
					<i className="fa fa-file"></i> Get Math Ml
				</div>	
				<div className="crop">
					<i className="fa fa-crop"></i>
				</div>	
				<div className="annotation">
					<i className="fa fa-file"></i> Annotation
				</div>	
			</div>
			<div className="form-group">
				<div className="form-flex">
					<div className="item">
						<label htmlFor="Language">Language <img style={{width:"20px",margin:"-5px"}} src="/assets/i.PNG" alt=""/></label>
						<Input className="form-control input-radius" type="dropdown" options={["English","hindi"]} />
					</div>
					<div className="item">
						<label htmlFor="Language">Subject Editor <img style={{width:"20px",margin:"-5px"}} src="/assets/i.PNG" alt=""/></label>
						<Input className="form-control input-radius" type="dropdown" options={["Chemistry","Maths"]} />
					</div>
				</div>
			</div>
			<div className="equation">
				<img src="/assets/formula.PNG" alt=""/>
				<div className="edit">	
					<i className="fa fa-pen"></i> Edit
				</div>
			</div>
			<div className="actions">
				<Button className="btn btn-circle">Export MathMl</Button>
				<i className="fa fa-thumbs-up"></i>
				<i className="fa fa-thumbs-down"></i>
				<img src="/assets/chat.PNG" alt=""/>
			</div>
		</div>
	</div>
	}
}
export default Upload