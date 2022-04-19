import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Dashbord from "./components/dashbord";
import FoodDonaton from "./components/FoodDonation";
import Volunteers from "./components/Volunteers";
import IndividualDonation from "./components/IndividualDonation";
import ClothesDonation from "./components/ClothesDonation";
import EmailSignin from "./components/EmailSignIn";
import NGOProtectedRoute from "./components/NGOProctedPoute";

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
        <Route path="/phonesignup" element={<PhoneSignUp />} />
        <Route path="/emailsignin" element={<EmailSignin />} />
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
