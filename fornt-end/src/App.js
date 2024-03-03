import React , { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate ,
  Link
} from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ViewProfile from './pages/viewProfile/viewProfile';
import BuyPolicy from './pages/buyPolicy/buyPolicy';
import ClaimPolicy from './pages/claim/claim';
import AllPolicy from './pages/allPolicyList/allPolicyList';
import AllClaim from './pages/allClaimRequestList/allClaimRequestList';
import ViewAllDataOfPolicy from './pages/viewAllDataOfPolicy/viewAllDataOfPolicy';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './context/AuthContext';



function App() {

  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={ < Home  />  }></Route>
            <Route exact path='/login' element={ !user ? < Login />  : <Navigate to="/" />}></Route>
            {/* <Route exact path='/register' element={ user ? <Navigate to="/" />  : < Register />}></Route> */}
            <Route exact path='/register' element={  < Register />}></Route>
            <Route exact path='/viewProfile' element={  <ViewProfile  />}></Route>
            <Route exact path='/buyPolicy' element={  <BuyPolicy  />}></Route>
            <Route exact path='/claimPolicy' element={  <ClaimPolicy  />}></Route>
            <Route exact path='/allPolicy' element={  <AllPolicy  />}></Route>
            <Route exact path='/viewAllDataOfPolicy' element={  <ViewAllDataOfPolicy  />}></Route>
            <Route exact path='/allClaim' element={  <AllClaim  />}></Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
