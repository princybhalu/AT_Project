import React, { useRef, useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buyPolicy.css';
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from '../../context/AuthContext';


function register() {

    const policyType = useRef();
    const ageOfPolicyHolder = useRef();
    const incomOfPolicyHolder = useRef();
    const policyAmount = useRef();
    const timePeriodOfRenewPolicy = useRef();
    // const checkbox = useRef();
    const navigate = useNavigate();
   // const [checkIsSelected, SetCheckBox] = useState(0);
    const { user } = useContext(AuthContext);


    // const changeInTermCondition = () => {
    //     checkIsSelected ? SetCheckBox(1) : SetCheckBox(0);
    // }

    // useEffect(() => {
    //     // checkIsSelected ? SetCheckBox(1) : SetCheckBox(0);
    //     console.log(checkIsSelected);
    // }, [checkIsSelected]);

    const handleClick = async (e) => {
        e.preventDefault();
        if (policyType.current.value == "0") policyType.current.setCustomValidity("Select Policy Type!");
        else if (policyAmount.current.value == "0") policyAmount.current.setCustomValidity("Select Policy Amount!");
        else if (timePeriodOfRenewPolicy.current.value == "0") timePeriodOfRenewPolicy.current.setCustomValidity("Select Time Period Of Renew Policy!");
        else {
            const addpolicy = {
                fullnameOfPolicyHolder: user.fullname,
                emailOfPolicyHolder: user.email,
                ageOfPolicyHolder: ageOfPolicyHolder.current.value,
                incomOfPolicyHolder: incomOfPolicyHolder.current.value,
                policyType: policyType.current.value,
                policyAmount: policyAmount.current.value,
                timePeriodOfRenewPolicy: timePeriodOfRenewPolicy.current.value,
                policyISProved: 0,
            };
            console.log(addpolicy);
            try {
                const res = await axios.post("/policy/add", addpolicy);
                navigate('/');
            } catch (err) {
                console.log(err);
            }

        }

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
                            <h3>Policy Form</h3>
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

                                <div class="form-group mb-3">
                                    <label for="exampleFormControlInput1">Age</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Age" ref={ageOfPolicyHolder} required />
                                </div>

                                <div class="form-group mb-3">
                                    <label for="exampleFormControlInput1">Annual Income</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Annual Income" ref={incomOfPolicyHolder} required />
                                </div>

                                {/* <!-- Select Policy Amount --> */}
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Policy Amount</label>
                                    <select class="form-select" id="bettype" aria-label="Disabled select example" ref={policyAmount} required>
                                        <option value="0" selected>Select Policy Amount</option>
                                        <option value="1 Crore">1 Crore</option>
                                        <option value="10 Lakh">10 Lakh</option>
                                        <option value="5 Lakh">5 Lakh</option>
                                        <option value="1 Lakh">1 Lakh</option>
                                        <option value="50 Thousand">50 Thousand</option>
                                        <option value="25 Thousand">25 Thousand</option>
                                    </select>
                                </div>

                                {/* <!-- Select Time Period Of renew policy --> */}
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Time Period Of renew policy</label>
                                    <select class="form-select" id="bettype" aria-label="Disabled select example" ref={timePeriodOfRenewPolicy} required >
                                        <option value="0" selected>Select Time Period</option>
                                        <option value="Year">Year</option>
                                        <option value="Month">Month</option>
                                        <option value="Week">Week</option>
                                        <option value="Day">Day</option>
                                    </select>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"/>
                                    <label class="form-check-label" for="flexCheckDefault"> &nbsp; I agree all Term and Condition apply. </label>
                                </div>

                                <div class="form-floating mb-3">
                                      <button type='submit' class="btn btn-primary login-btn" >Submit</button>

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

export default register;