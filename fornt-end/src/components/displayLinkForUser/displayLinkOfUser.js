import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function displayLinkForUser() {

    return <>
        <li class="nav-item">
            <a class="nav-link text-dark" href="buyPolicy">Buy Policy</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" href="claimPolicy">Claim</a>
        </li>
    </>
}
export default displayLinkForUser;
