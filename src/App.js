import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import Bookingpage from './pages/Bookingpage';
import Loginpage from './pages/Loginpage';
import Offerpage from './pages/Offerpage';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
const App = () => {
    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/offer" element={<Offerpage />} />
                    <Route exact path="/about" element={<Aboutpage />} />
                    <Route exact path="/login" element={<Loginpage />} />
                    <Route exact path="/booking" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/booking"
                            element={<Bookingpage />}
                        />
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default App;
