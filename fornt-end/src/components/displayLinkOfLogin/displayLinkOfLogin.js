import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function displayLinkOfLogin() {

    return <>
        <div class="d-flex align-items-center">
            <a class='btn btn-link text-decoration-none px-3 me-2' href='Login'>Login</a>
            <a class='btn btn-primary me-3' href='Register'>Sign up for free</a>
        </div>
    </>
}
export default displayLinkOfLogin;
