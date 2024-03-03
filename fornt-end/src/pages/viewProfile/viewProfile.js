import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../../context/AuthContext';
import './viewProfile.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router";




function viewProfile() {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);
	const navigate = useNavigate();
    const i = 0 ;

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/policy/getAllPolicy/" + user.email);
            setPosts(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
        };
        fetchPosts();
    }, [user]);
 
    const logout = () => {
        localStorage.setItem('user', null);
        window.location.replace('/login');
      };

    return <>
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
                    <div class="col-xl-6 col-md-12">
                        <div class="card user-card-full">
                            <div class="row m-l-0 m-r-0">
                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                    <div class="card-block text-center text-white">
                                        <div class="m-b-25">
                                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                                        </div>
                                        <h6 class="f-w-600">{user.fullname}</h6>
                                        <Link to="/" class="text-decoration-none text-white"><p >Back To Home</p></Link>
                                        <button onClick={logout} >Logout</button>
                                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Email</p>
                                                <h6 class="text-muted f-w-400">{user.email}</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Total Policy</p>
                                                <h6 class="text-muted f-w-400">{posts.length}</h6>
                                            </div>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Policy List</h6>
                                        <div class="row">

                                            <table class="table">
                                                <caption>* Renew Policy </caption>
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="f-w-600 f-s-16">Policy Type</th>
                                                        <th scope="col" class="f-w-600 f-s-16">Policy Amount</th>
                                                        <th scope="col" class="f-w-600 f-s-16">Time Period OF RP*</th>
                                                        <th scope='col' class="f-w-600 f-s-16">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {posts.map((p) => (
                                                        <tr>
                                                            <td>{p.policyType}</td>
                                                            <td>{p.policyAmount}</td>
                                                            <td>{p.timePeriodOfRenewPolicy}</td>
                                                            <td>{p.policyISProved == 1 ? "Aproved" : p.policyISProved == -1 ? "Dismiss" :  "Processing"}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default viewProfile;
