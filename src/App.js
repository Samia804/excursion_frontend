import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
import JoinOperator from "./pages/JoinOperator";
import ForgotPW from "./pages/ForgotPW";
import Resume from "./pages/Resume";
import DestinationList from "./pages/DestinationList";
import TripOverview from "./pages/TripOverview";
import TripSummary from "./pages/TripSummary";
import Checkout from "./pages/Checkout";
import ConfirmationMessage from "./pages/ConfirmationMessage";
import PastTrips from "./pages/PastTrips";
import UpcomingTrips from "./pages/UpcomingTrips";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";
import PastTripDetails from "./pages/PastTripDetails";
import UpcomingTripDetails from "./pages/UpcomingTripDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/past-trips" element={<PastTrips />} />
        <Route path="/upcoming-trips" element={<UpcomingTrips />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/" element={<Home />} />
        <Route path="/destination/:destination" element={<DestinationList />} />
        <Route path="/trip/:id" element={<TripOverview />} />
        <Route path="/trip-summary" element={<TripSummary />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<ConfirmationMessage />} />
        <Route path="/join-operator" element={<JoinOperator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
        <Route path="/past-trip/:id" element={<PastTripDetails />} />
        <Route path="/upcoming-trip-details/:id" element={<UpcomingTripDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
