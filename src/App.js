import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Category from './pages/Category';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import PrivateRoutes from './components/PrivateRoutes';
import Spinner from './components/Spinner';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offer' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
         <Route path='/profile' element={<PrivateRoutes />} >
            <Route path='/profile' element={<Profile />} />
         </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/category/:categoryName/:listingId' element={<Listing />} />
          <Route path='/contact/:landlordId' element={<Contact />} />
          </Routes>
        <Navbar />
      </Router>
<ToastContainer />
    </>
   
  );
}

export default App;
