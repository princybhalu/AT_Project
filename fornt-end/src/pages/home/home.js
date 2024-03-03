import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/nav/nav';
import ShowProducts from '../../components/show_products/show_products';
import './home.css';

function Home() {

    // const {user} = useContext(AuthContext);

    return <>

        <Navbar />
        <br />
        {/* Ads */}
        <div class='container'>
            <div class='row'>
                <div class='col'></div>
                <div class='col-4'>
                    <img src="http://localhost:3000/assrest/insuranceAd2.jpeg" class="d-block w-100 adImg"
                        alt="Wild Landscape" height={1} />
                </div>
                <div class='col'></div>
                <div class='col-4'>
                    <img src="http://localhost:3000/assrest/insuranceAd.jpeg" class="d-block w-100 adImg"
                        alt="Wild Landscape" height={1} />
                </div>
                <div class='col'></div>
            </div>
        </div>
        <br />
        {/* Show Products */}
        <ShowProducts />
        <br />
        <div class="container">
            <h2 class="title-ad"> &nbsp; Also Buy </h2>
            <div class="list mt-2">
                <ul>
                    <li>
                        <span class="sprite-image lowest-price"></span>
                        <div>
                            <p class="heading">Investment : </p>
                            <p class="text">LIC Plans </p>
                        </div>
                    </li>
                    <li>
                        <span class="sprite-image unbiased-advice"></span>
                        <div>
                            <p class="heading">Term Life</p>
                            <p class="text"> Return of Premium <br />
                                Life Insurance for Housewives</p>
                        </div>
                    </li>
                    <li>
                        <span class="sprite-image reliable"></span>
                        <div>
                            <p class="heading">Health</p>
                            <p class="text">Corona Virus Health Insurance <br />
                                Arogya Sanjeevani <br/>
                                1 Cr Health Insurance</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <br />
        <div class="container">
            <h2 class="title-ad"> &nbsp; IC Advantage</h2>
            <p class="text-header mt-1" style={{ width: 700 }}>When you buy insurance from us, you get more than just financial safety.
                You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.</p>

            <a href="#" class="know knowmoreSeo">Know more</a>
            <div class="list mt-2">
                <ul>
                    <li>
                        <span class="sprite-image lowest-price"></span>
                        <div>
                            <p class="heading">One of the best Prices </p>
                            <p class="text">Guaranteed</p>
                        </div>
                    </li>
                    <li>
                        <span class="sprite-image unbiased-advice"></span>
                        <div>
                            <p class="heading">Unbiased Advice</p>
                            <p class="text">Keeping customers first</p>
                        </div>
                    </li>
                    <li>
                        <span class="sprite-image reliable"></span>
                        <div>
                            <p class="heading">100% Reliable</p>
                            <p class="text">Regulated by IRDAI</p>
                        </div>
                    </li>
                    <li>
                        <span class="sprite-image claim-support"></span>
                        <div>
                            <p class="heading">Claims Support</p>
                            <p class="text">Made stress-free</p>
                        </div>
                    </li>
                    <li>
                        <span class="sprite-image happy-help"></span>
                        <div>
                            <p class="heading">Happy to Help</p>
                            <p class="text">Every day of the week</p>
                        </div></li>
                </ul>
            </div>
        </div>
        <br />
        <Footer />
    </>
}

export default Home;



{/* <a class="navbar-brand"><b>Insurance Policy Market</b>.com</a> */ }