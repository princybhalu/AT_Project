import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

function Footer() {

    return <>
        <footer class="bg-primary text-center text-lg-start">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
                {/* <!--Grid row--> */}
                <div class="row text-center">
                    <div class="col-12 ">
                        <p class="info">**Discount is offered by the Insurance company as approved by IRDAI for the product under File &amp; Use guidelines <br />#On the basis of your profile</p>
                        <p class="info">Insurance Company Insurance Brokers Private Limited | CIN: U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44, Gurgaon, Haryana - 122001 Tel no. : 0124-4218302 Email ID: enquiry@insurancepolicymarket.com </p>
                        <p class="info"><a class="text-decoration-none text-light" onclick="javascript:GA360EventPage('Footer_Click','Contact Us','');" href="https://www.policybazaar.com/contact-us/">Contact Us</a>  |  <a class="text-decoration-none text-light" onclick="javascript:GA360EventPage('Footer_Click','Legal and Admin Policies','');" href="https://www.policybazaar.com/legal-and-admin-policies/">Legal and Admin Policies</a></p>
                        <p class="info">Insurance Policy Market is registered as a Direct Broker | Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024, License category- Direct Broker (Life &amp; General)| Visitors are hereby informed that their information submitted on the website may be shared with insurers.Product information is authentic and solely based on the information received from the insurers.</p>
                        <p class="info mt15">© Copyright 2008-2022 InsuranceCompany.com. All Rights Reserved.</p>
                    </div>

                </div>
                {/* <!--Grid row--> */}
            </div>
            {/* <!-- Grid container --> */}
        </footer>
    </>
}
export default Footer;
