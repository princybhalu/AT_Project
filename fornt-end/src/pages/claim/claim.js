import React, { useRef, useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../buyPolicy/buyPolicy.css';
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from '../../context/AuthContext';


function claimForm() {

    const { user } = useContext(AuthContext);
    const policyType = useRef();
    const prooflink = useRef();
	const navigate = useNavigate();


    const handleClick = async (e) => {
        e.preventDefault();
        const newPost = {
            fullnameOfPolicyHolder: user.fullname,
            emailOfPolicyHolder: user.email,
            policyType: policyType.current.value,
            Prooflink: prooflink.current.value ,
            claimISProved: 0,
        };
        try {
            await axios.post("/claim/add", newPost);
            navigate('/');
        } catch (err) { }
    };

    return <>
        <div class='container'>
            <div class='row'>
                <div class='col'>
                    <img src="http://localhost:3000/assrest/logo.png" class="d-block logoimg"
                        alt="Wild Landscape" />
                </div>
                <div class="col-md-7 form-part ">
                    <div class="row formStart">
                        <div class="col-lg-8 col-md-11  formcol mx-auto">
                            <h3>Claim Form</h3>

                            <form action='post' onSubmit={handleClick} >

                                {/* <!-- Select Policy Type --> */}
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Policy Type</label>
                                    <select class="form-select" id="bettype" aria-label="Disabled select example" ref={policyType} required >
                                        <option value="0" selected>Select Policy Type</option>
                                        <option value="Health Insurance">Health Insurance</option>
                                        <option value="Term Life Insurance">Term Life Insurance</option>
                                        <option value="Car Insurance">Car Insurance</option>
                                        <option value="Two Wheeler Insurance">Two Wheeler Insurance </option>
                                        <option value="Retriment Plans">Retriment Plans</option>
                                        <option value="Child Saving Plans">Child Saving Plans</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Proof Link</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Google Drive Link" ref={prooflink} required />
                                        <small id="emailHelp" class="form-text text-muted">Upload All needed document on google drive and copy link of that document and submit here.</small>
                                </div>

                                <div class="form-floating mb-3">
                                    <button type='submit' class="btn btn-primary login-btn" disabled={false}>Submit</button>
                                </div>
                            </form>

                            <a href="/" class="">Back to Home</a>



                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
}

export default claimForm;