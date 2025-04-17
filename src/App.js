import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from "./pages/Home";
import Login from "./pages/Login"; // ✅ Import Login Page
import Register from "./pages/Register"; // ✅ Ensure Register Page is Imported
import Dashboard from "./pages/Dashboard";
import CustomTrip from "./pages/CustomTrip";
import Chat from "./pages/Chat";
import Wallet from "./pages/Wallet";
import Rewards from "./pages/Rewards";
import Reviews from "./pages/Reviews";
import TripDetails from "./pages/TripDetails";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import Contact from "./components/Contact";
import JoinOperator from "./pages/JoinOperator"; // ✅ Ensure JoinOperator Page is Imported
import ForgotPW from "./pages/ForgotPW";
import Resume from "./pages/Resume";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-operator" element={<JoinOperator />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Added Login Route */}
        <Route path="/register" element={<Register />} /> {/* ✅ Added Register Route */}
        <Route path="/forgot-password" element={<ForgotPW />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/custom-trip" element={<CustomTrip />} />
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
      <Footer />
    </div>
  );
}

export default App;
