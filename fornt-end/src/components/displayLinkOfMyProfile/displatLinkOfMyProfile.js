import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../../context/AuthContext';


function displayLinkOfMyProfile() {

    const { user } = useContext(AuthContext);
    const fullname = user.fullname ;

    return <>
        <div class="d-flex align-items-center">
            <a class='btn btn-link text-decoration-none px-3 me-2' href='viewProfile'>Hello {fullname}</a>
        </div>
    </>
}
export default displayLinkOfMyProfile;
