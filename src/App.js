import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import Bookingpage from './pages/Bookingpage';
import Loginpage from './pages/Loginpage';
import Offerpage from './pages/Offerpage';
import Header from './components/Header';
const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                </Routes>
                <Routes>
                    <Route exact path="/offer" element={<Offerpage />} />
                </Routes>
                <Routes>
                    <Route exact path="/about" element={<Aboutpage />} />
                </Routes>
                <Routes>
                    <Route exact path="/booking" element={<Bookingpage />} />
                </Routes>
                <Routes>
                    <Route exact path="/login" element={<Loginpage />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
