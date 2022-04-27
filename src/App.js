import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PhoneSignUp from "./pages/PhoneSignUp";
import ProtectedRoute from "./pages/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Dashbord from "./pages/dashbord";
import FoodDonaton from "./pages/FoodDonation";
import Volunteers from "./pages/Volunteers";
import IndividualDonation from "./pages/IndividualDonation";
import ClothesDonation from "./pages/ClothesDonation";
import EmailSignin from "./pages/EmailSignIn";
import NGOProtectedRoute from "./pages/NGOProctedPoute";
import MyRequests from "./pages/MyRequests";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/home"
          element={
            <NGOProtectedRoute>
              <Home />
            </NGOProtectedRoute>
          }
        />
        <Route path="/" element={<Dashbord />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/phonesignup" element={<PhoneSignUp />} />
        <Route path="/emailsignin" element={<EmailSignin />} />

        <Route
          path="/myRequests"
          element={
            <ProtectedRoute>
              <MyRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foodDonation"
          element={
            <ProtectedRoute>
              <FoodDonaton />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clothesDonation"
          element={
            <ProtectedRoute>
              <ClothesDonation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/individualDonation"
          element={
            <ProtectedRoute>
              <IndividualDonation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/volunteers"
          element={
            <ProtectedRoute>
              <Volunteers />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
