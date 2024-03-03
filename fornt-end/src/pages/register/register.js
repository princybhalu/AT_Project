import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import axios from "axios";
import { useNavigate } from "react-router";

function register() {

	const fullname = useRef();
	const email = useRef();
	const password = useRef();
	const confirmpassword = useRef();
	const navigate = useNavigate();

	const handleClick = async (e) => {
		e.preventDefault();
		if (confirmpassword.current.value !== password.current.value) {
			confirmpassword.current.setCustomValidity("Passwords don't match!");
		} else {
		  const user = {
			fullname: fullname.current.value,
			email: email.current.value,
			password: password.current.value,
		  };
		  try {
			console.log(user);
			const res = await axios.post("/auth/register", user);
			//await axios.post("/auth/register", user);
			console.log("done");
			navigate('/login');
		  } catch (err) {
			console.log(err);
		  }
		}
	  };



	return <>
		<div class='container'>
			<div class='row'>
				<div class='col'>
					<img src="http://localhost:3000/assrest/logo.png" class="d-block w-100 sideimg"
						alt="Wild Landscape" />
				</div>
				<div class="col-md-7 form-part ">
					<div class="row formpart2">
						<p class="signinlink">I already have an account <a href="Login">Sign In</a></p>

						<div class="col-lg-8 col-md-11  formcol mx-auto">
							<h3>Sign Up to Insurance Company</h3>
							<form action='post' onSubmit={handleClick} >
								<div class="form-floating mb-3">
									<input type="text" class="form-control" id="floatingInput" placeholder="Enter Full Name" ref={fullname} required />
									<label for="floatingInput">Full Name</label>
								</div>
								<div class="form-floating mb-3">
									<input type="email" class="form-control" id="floatingInput" placeholder="Enter Email Address" ref={email} required />
									<label for="floatingInput">Email address</label>
								</div>
								<div class="form-floating mb-3">
									<input type="password" class="form-control" id="floatingPassword" placeholder="Password"  ref={password} required minLength={6}/>
									<label for="floatingPassword">Password</label>
								</div>
								<div class="form-floating">
									<input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" ref={confirmpassword} required />
									<label for="floatingPassword">Confirm Password</label>
								</div>
								<div class="form-floating">
									<button type='submit' class="btn btn-primary login-btn">Create Account</button>
								</div>
							</form>


						</div>

					</div>

				</div>
			</div>
		</div>
	</>
}
export default register;
