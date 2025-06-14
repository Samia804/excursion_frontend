import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";



// Shared Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

// Excursionist Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPW from "./pages/ForgotPW";
//import Dashboard from "./pages/Dashboard";
//import CustomTrip from "./pages/CustomTrip";
import DestinationList from "./pages/DestinationList"
import Chat from "./pages/Chat";
import Wallet from "./pages/Wallet";
import Rewards from "./pages/Rewards";
import Reviews from "./pages/Reviews";
import TripDetails from "./pages/TripDetails";
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
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import JoinOperator from "./pages/JoinOperator";
import Resume from "./pages/Resume";

// Operator Pages
import OperatorDashboard from "./pages/OperatorDashboard";
import CustomBid from "./pages/CustomBid";
import CustomTripForm from "./components/CustomTripForm";
import CalendarPage from "./pages/CalendarPage";
import TripPlanningForm from "./pages/TripPlanningForm";
import CustomBookingSummary from "./pages/CustomBookingSummary";
import OperatorReviews from "./pages/OperatorReviews";
import OperatorNotifications from "./pages/OperatorNotifications";
import OperatorSettings from "./pages/OperatorSettings";
import OperatorProfile from "./pages/OperatorProfile";

function App() {
  const location = useLocation();

  const operatorRoutes = [
    "/operator-dashboard",
    "/custom-bid",
    "/wallet",
    "/calendar-page",
    "/rewards",
    "/reviews",
    "/resume",
    "/trip-planning-form",
    "/custom-booking-summary",
    "/operator-reviews",
    "/operator-notifications",
    "/operator-settings",
    "/operator-profile",
  ];

  const hideNavAndFooter = operatorRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div>
      {!hideNavAndFooter && <Navbar />}

      <Routes>
        {/* Excursionist Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/join-operator" element={<JoinOperator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPW />} />
        <Route path="/operator-dashboard" element={<OperatorDashboard />} />
        <Route path="/custom-bid" element={<CustomBid />} /> 
        <Route path="/custom-trip-form" element={<CustomTripForm />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/trip-summary" element={<TripSummary />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<ConfirmationMessage />} />
        <Route path="/past-trips" element={<PastTrips />} />
        <Route path="/upcoming-trips" element={<UpcomingTrips />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/destination-list/:destination" element={<DestinationList />} />
        <Route path="/trip-overview/:id" element={<TripOverview />} />
        <Route path="/past-trip/:id" element={<PastTripDetails />} />
        <Route path="/upcoming-trip-details/:id" element={<UpcomingTripDetails />} />

        {/* Operator Routes */}
        <Route path="/operator-dashboard" element={<OperatorDashboard />} />
        <Route path="/custom-bid" element={<CustomBid />} />
        <Route path="/custom-trip-form" element={<CustomTripForm />} />
        <Route path="/calendar-page" element={<CalendarPage />} />
        <Route path="/trip-planning-form" element={<TripPlanningForm />} />
        <Route path="/custom-booking-summary" element={<CustomBookingSummary />} />
        <Route path="/operator-reviews" element={<OperatorReviews />} />
        <Route path="/operator-notifications" element={<OperatorNotifications />} />
        <Route path="/operator-settings" element={<OperatorSettings />} />
        <Route path="/operator-profile" element={<OperatorProfile />} />
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
