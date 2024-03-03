import React, { useContext, useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function displayLinkForAdmin({ post }) {

    const approvepolicy = () => {
        try {
            axios.put("/claim/setApporve/" + post._id, { claimISProved: 1 });
            window.location.reload ();
        } catch (err) {
            console.log(err);
        }

    }

    const dismissPolicy = () => {
        try {
            axios.put("/claim/setApporve/" + post._id, { claimISProved: -1 });
            window.location.reload ();
        } catch (err) {
            console.log(err);
        }
    }

    return <>
        {/* <h4><center>Details Of Policy</center></h4> */}
        <br />
        <div class="card">
            <h5 class="card-header">{post.emailOfPolicyHolder}</h5>
            <div class="card-body">
                <h5 class="card-title">{post.policyType}</h5>
                <p class="card-text">This Policiy Holder Details :-
                    <br />
                    Name : {post.fullnameOfPolicyHolder} , Email : {post.emailOfPolicyHolder} , <br /><br/>

                    This Claim Details :-
                    Policy Type : {post.policyType} , <br />
                    Proof Link : {post.Prooflink} , <br/> 
                    Status : {!post.claimISProved ? "Remaining" : post.claimISProved == -1 ? "Deleted" : "Checked"} <br />
                </p>
                {post.claimISProved ? `` :
                    (<><a class="btn btn-success mr-2" onClick={approvepolicy}>Approve</a>  &nbsp;
                        <a class="btn btn-danger" onClick={dismissPolicy}>Delete</a></>)}
            </div>
        </div>

    </>
}
export default displayLinkForAdmin;

