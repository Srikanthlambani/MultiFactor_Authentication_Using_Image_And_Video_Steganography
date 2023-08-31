// import logo from "./logo.svg";
import "./App.css";
// import Forms from "./Components/Form";
import RegistrationForm from "./Components/RegistrationForm";
import Check from "./Components/Check";
import UpdatePassword from "./Components/UpdatePassword";

import InputField from "./Components/InputField";
import SignUpForm from "./Components/SignUpForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import ForgotPasswordForm from "./Components/ForgotPasswordForm";
import AboutPage from "./Components/AboutPage";
import MainContent from "./Components/MainContent";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import ForgotOTPVerify from "./Components/ForgotOTPVerify";
import OtpVerify  from "./Components/OtpVerify";
import Test from "./Components/Test";
import User from "./Components/User";

function App() {
  return (
  //   // <div className="App">
  //   {/* <div className="mainContent">
  //   <div id="mainContent">
  //   <MainContent />
  //   </div>
  //   <div id="hideLogin">
  //   <LoginForm />
  //   </div>
  // </div> */}
  // {/* <LoginForm /> */}
  <>
  
    {/* <Navbar /> */}
  <BrowserRouter >
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordForm />} />
        <Route path='/otpverify' element={<OtpVerify />} />
        <Route path='/forgototpverify' element={<ForgotOTPVerify />} />
        <Route path='/check' element={<Check />} />
        <Route path='/user-details' element={<User />} />
        <Route path='/update-password' element={<UpdatePassword />} />
      </Routes>
    </BrowserRouter>
      {/* <Footer /> */}

      </>
  );
}

export default App;
