import"../../Css/Authentication/Login.css";
import emailValidator from 'email-validator';
import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Cookies from "js-cookie";
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [invalidEmail,setInvalidEmail] = useState(false);
  const [isEmailBlur, setIsEmailBlur] = useState(false);
  const Navigate = useNavigate();
  const location = useLocation();
  const redirectTo = new URLSearchParams(location.search).get('redirectTo');
  const redirectLink = redirectTo || '/dashboard';

  useEffect(() => {
    const jwtToken = Cookies.get('jwtToken');
    const adminEmail = localStorage.getItem('AdminEmail');
    if (jwtToken || adminEmail) {
      Navigate(redirectLink, { replace: true });
    }
  }, [Navigate, redirectLink]);
  const handleEmailChange = (e) => {
    const eventValue = e.target.value;
    setEmail(eventValue);
    if(eventValue !== "")
    setInvalidEmail(!emailValidator.validate(eventValue));
    else {
      setInvalidEmail(!invalidEmail);
    }
    
  };
  const emailBlurHandler = (event) => {
    setIsEmailBlur(true);
  };
  const handleForgotPassword = async () => {
    try {
      
      const response = await fetch('https://localhost:7234/api/Auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({ email: btoa(email) }), 
      });
      if (response.ok) {
        Navigate(`/reset-password?email=${encodeURIComponent(email)}`);
      }
  
      else  {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      
      
    } catch (error) {
      console.error(error);
    }
  };
  

      const emailClassName = isEmailBlur && (email === "" || invalidEmail) ? "empty-error-msg" : "no-msg";
      const emailErrorMsg = invalidEmail && isEmailBlur? "Please enter a valid email address" : "Email is Required";

    return(
        <div
        className="modal-container"
      >
        <div className="modal">
              <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1703760076/5828286_y1tt5f.jpg" alt="admin" className="log-in-img"/>
              <div className="log-in-container">
                <h1 className="login-heading">Forgot Password</h1>
                <div className="input-container">
            <input className="input" type="email" placeholder="Email Id" value={email} onChange={handleEmailChange}  onBlur={emailBlurHandler} />
            <span className={emailClassName}>*{emailErrorMsg}</span></div>
              <button className="btn" onClick={handleForgotPassword} >Verify Email</button>
              </div>
        </div>
      </div>
      )
}