import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function displayLinkForAdmin() {

    return <>
        <li class="nav-item">
            <a class="nav-link text-dark" href="allPolicy">All Policy List</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" href="allClaim">Claim Request</a>
        </li>
    </>
}
export default displayLinkForAdmin;
