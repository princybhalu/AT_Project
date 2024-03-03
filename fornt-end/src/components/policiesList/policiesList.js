import React, { useContext, useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";

function displayListOfPolicy() {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);
    
  
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
    return <>
        <h6 class="text-muted f-w-400">{posts.length}</h6>
    </>
}
export default displayListOfPolicy;
