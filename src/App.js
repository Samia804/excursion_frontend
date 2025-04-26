import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OperatorDashboard from "./pages/OperatorDashboard";
import CustomTrip from "./pages/CustomTrip";
import Chat from "./pages/Chat";
import Wallet from "./pages/Wallet";
import Rewards from "./pages/Rewards";
import Reviews from "./pages/Reviews";
import TripDetails from "./pages/TripDetails";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import Contact from "./components/Contact";
import JoinOperator from "./pages/JoinOperator";
import ForgotPW from "./pages/ForgotPW";
import Resume from "./pages/Resume";
import CustomTripForm from "./components/CustomTripForm";

function App() {
  const location = useLocation();

  // Define operator-specific routes
  const operatorRoutes = [
    "/operator-dashboard",
    "/custom-trip",
    "/wallet",
    "/chat",
    "/rewards",
    "/reviews",
    "/resume",
  ];

  const hideNavAndFooter = operatorRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div>
      {!hideNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-operator" element={<JoinOperator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPW />} />
        <Route path="/operator-dashboard" element={<OperatorDashboard />} />
        <Route path="/custom-trip" element={<CustomTrip />} />
        <Route path="/custom-trip-form" element={<CustomTripForm />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
