import React, {useContext , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayLinkOfLogin from '../displayLinkOfLogin/displayLinkOfLogin';
import DisplayLinkOfMyProfile from '../displayLinkOfMyProfile/displatLinkOfMyProfile';
import DisplayLinkForUser from '../displayLinkForUser/displayLinkOfUser';
import DisplayLinkForAdmin from '../displayLinkForAdmin/displayLinkForAdmin';
import { AuthContext } from '../../context/AuthContext';


function navbar() {

    const {user } = useContext(AuthContext);

    return <>
        {/* <!-- Navbar --> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* <!-- Container wrapper --> */}
            <div class="container">
                {/* <!-- Navbar brand --> */}
                <a class="navbar-brand me-2 text-primary" href="">
                    <b>Insurance Company</b>.com
                </a>

                {/* <!-- Toggle button --> */}
                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button>

                {/* <!-- Collapsible wrapper --> */}
                <div class="collapse navbar-collapse" id="navbarButtonsExample">
                    {/* <!-- Left links --> */}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/">Home</a>
                        </li>
                        {user.typeOfUser ? <DisplayLinkForUser/>  : <DisplayLinkForAdmin /> }
                    </ul>
                    {/* <!-- Left links --> */}
                    
                    {user ? <DisplayLinkOfMyProfile /> : <DisplayLinkOfLogin />}
                </div>
                {/* <!-- Collapsible wrapper --> */}
            </div>
            {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
    </>
}
export default navbar;
