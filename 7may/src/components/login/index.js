import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
const Login=(props) => {

	const handleSubmit=e=>{
		e.preventDefault()
		props.history.push("/Home")
	}	

 return <div className="container-login">
			<div className="login-form">
				<div className="left">
					<img src="/assets/login-banner.jpg" alt=""/>
				</div>
				<div className="right">
					<form onSubmit={handleSubmit}>
						<h1>Sign In</h1>
						<div className="form-group">
							<label htmlFor="Email">Email Id</label>
							<input placeholder="Enter Email-ID" className="form-control"/>
						</div>
						<div className="form-group">
							<label htmlFor="Password">Password</label>
							<input placeholder="Enter Password" className="form-control"/>
						</div>
						<div className="text-right">
							<a href="">Forget Password ?</a>
						</div>
						<div className="form-checkbox">
							<input type="checkbox"/>
							By Continuing you accept the <strong>terms and condition</strong> of the <strong>company</strong>
						</div>		
						<div className="form-button">
							<button>Sign in</button>
						</div>
						<div className="form-or">
							<h3>Or</h3>
						</div>	
						<div className="form-google">
							<img align="middle" width="30" src="/assets/google.png"/> Signin with Google
						</div>
						<div className="form-new-user">
							<Link to="/Signup"><strong>new User</strong> ? 	</Link>
						</div>
					</form>		

				</div>
			</div>
	</div>
}
export default Login