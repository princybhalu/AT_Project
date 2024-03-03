import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function showproducts() {

    return <>
        <div class="container">

            {/* <!-- Row1 --> */}
            <div class="row mt-2 max-vh-50">
                {/* <!-- Term Life Insurance --> */}
                <div class="col">
                    <div class="card text-center max-vh-20">
                        <img class="card-img-top cardimg max-vh-50" src="http://localhost:3000/assrest/term_life_insurance.jpg" alt="Card image cap" 
                        height={200}/>
                            <div class="card-body">
                                <a href="buyPolicy" class="btn btn-primary">
                                    <h5 class="card-title">Term Life Insurance</h5>
                                </a>
                            </div>
                    </div>
                </div>

                {/* <!-- Health Insurance --> */}
                <div class="col">
                    <div class="card text-center max-vh-20" >
                        <img class="card-img-top cardimg max-vh-50" src="http://localhost:3000/assrest/health_insurance.jpg" alt="Card image cap"  height={200} />
                            <div class="card-body">
                                <a href="buyPolicy" class="btn btn-primary">
                                    <h5 class="card-title">Health Insurance</h5>
                                </a>
                            </div>
                    </div>
                </div>

                {/* <!-- Car Insurance --> */}
                <div class="col">
                    <div class="card text-center max-vh-20">
                        <img class="card-img-top cardimg max-vh-50" src="http://localhost:3000/assrest/car_insurance.jpg" alt="Card image cap"  height={200} />
                            <div class="card-body">
                                <a href="buyPolicy" class="btn btn-primary">
                                    <h5 class="card-title">Car Insurance</h5>
                                </a>
                            </div>
                    </div>
                </div>

            </div>

            {/* <!-- Row 2 --> */}
            <div class="row mt-2">
                {/* <!-- Two Wheeler Insurance --> */}
                <div class="col">
                    <div class="card text-center">
                        <img class="card-img-top cardimg vh-50" src="http://localhost:3000/assrest/bike_insurance.jpg" alt="Card image cap" height={200} />
                            <div class="card-body">
                                <a href="buyPolicy" class="btn btn-primary">
                                    <h5 class="card-title">Two Wheeler Insurance</h5>
                                </a>
                            </div>
                    </div>
                </div>

                {/* <!-- Retriment Plans --> */}
                <div class="col">
                    <div class="card text-center" >
                        <img class="card-img-top cardimg vh-50" src="http://localhost:3000/assrest/retirement_insurance.jpg" alt="Card image cap" height={200} />
                            <div class="card-body">
                                <a href="buyPolicy" class="btn btn-primary">
                                    <h5 class="card-title">Retriment Plans</h5>
                                </a>
                            </div>
                    </div>
                </div>

                {/* <!-- Child Saving Plans --> */}
                <div class="col">
                    <div class="card text-center" >
                        <img class="card-img-top cardimg vh-50" src="http://localhost:3000/assrest/Child_saving_insurance.jpg" alt="Card image cap" height={200} />
                            <div class="card-body">
                                <a href="buyPolicy" class="btn btn-primary">
                                    <h5 class="card-title"> Child Saving Plans </h5>
                                </a>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}
export default showproducts;
