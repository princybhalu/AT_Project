import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../../context/AuthContext';
import ViewAllDataOfPolicy from '../viewAllDataOfPolicy/viewAllDataOfPolicy';
import Navbar from '../../components/nav/nav';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from 'react-router-dom';
import axios from "axios";

 

function viewAllPolicy() {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/policy/getAllPolicyForAdmin");
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
        <h4><center>All Policies</center></h4>
        <div class="container">
            <div class="row">
                <table class="table">
                    <tbody>
                        {posts.map((p) => (
                            <tr>
                                <td> <ViewAllDataOfPolicy key={p._id} post={p} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}


export default viewAllPolicy;
