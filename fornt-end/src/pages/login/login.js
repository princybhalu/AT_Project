import React, { useRef , useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../register/register.css';
import {loginCall} from "../../apiCalls";
import { AuthContext } from '../../context/AuthContext';


function Login() {
 
	const email = useRef();
	const password = useRef();
	const { user , isFetching , error , dispatch } = useContext(AuthContext);

	const handleClick = (e)=> {
		e.preventDefault();
		console.log(email.current.value);
		loginCall({email:email.current.value , password: password.current.value }, dispatch );
	};

	console.log(user);
	return <>
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<img src="http://localhost:3000/assrest/logo.png" class="d-block w-100 sideimg"
						alt="Wild Landscape" />
				</div>
				<div className='col col-md-7 form-part'>

					<div class="row text-center formpart2">
						<p class="signinlink">Dont have an account <a href="Register">Sign Up</a></p>

						<div class="col-lg-8 col-md-11 login formcol mx-auto">
							<h3>Sign IN to Insurance Company</h3>
							<form onSubmit={handleClick} method="post"> 
								<div class="form-floating mb-3">
									<input type="email" class="form-control" id="floatingInput" placeholder="Enter Email Address" ref={email} required/>
									<label for="floatingInput">Email address</label>
								</div>
								<div class="form-floating">
									<input type="password" class="form-control" id="floatingPassword" placeholder="Password" ref={password} required minLength="6"/>
									<label for="floatingPassword">Password</label>
								</div>
								<div class="form-floating">
									<button type='submit' class="btn btn-primary login-btn">{ isFetching ? "loading":"Login"}</button>
								</div>
							</form>


						</div>

					</div>


				</div>
			</div>
		</div>
	</>

}
export default Login;
