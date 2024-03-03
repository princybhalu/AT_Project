import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../../components/nav/nav';
import ViewAllDataOfClaim from '../viewAllDataOfClaim/viewAllDataOfClaim';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from 'react-router-dom';
import axios from "axios";



function viewAllClaim() {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/claim/getAllClaimRequest");
            setPosts(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
        };
        fetchPosts();
    }, [user]);


    return <>
        <Navbar />
        <br />
        <h4><center>All Claim Request</center></h4>
        <div class="container">
            <div class="row">
                <table class="table">
                    <tbody>
                        {posts.map((p) => (
                            <tr>
                                <td> <ViewAllDataOfClaim key={p._id} post={p} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        {/* <div class="container">
            <div class="row">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" class="f-w-600 f-s-16">Policy Holder Full Name</th>
                            <th scope="col" class="f-w-600 f-s-16">Policy Holder Email Address</th>
                            <th scope="col" class="f-w-600 f-s-16">Policy Type</th>
                            <th scope="col" class="f-w-600 f-s-16">Proof Link</th>
                            <th scope='col' class="f-w-600 f-s-16">Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((p) => (
                            <tr>
                                <td>{p.fullnameOfPolicyHolder}</td>
                                <td>{p.emailOfPolicyHolder}</td>
                                <td>{p.policyType}</td>
                                <td>{p.Prooflink}</td>
                                <td>{p.claimISProved ? "Checked" : p.claimISProved == -1 ? "Deleted" : "Remaining"}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div> */}
    </>
}


export default viewAllClaim;
