import"../../Css/Authentication/Login.css";
import emailValidator from 'email-validator';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
export default function LoginPage() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailBlur, setIsEmailBlur] = useState(false);
  const [isPasswordBlur, setIsPasswordBlur] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginErrorMsg,setLoginErrorMsg] = useState("");
  const [apiFailure,setApiFailure] = useState(false);
  const Navigate = useNavigate()  
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
  };
  const emailBlurHandler = (event) => {
    setIsEmailBlur(true);
  };
  const passwordBlurHandler = (event) => {
    setIsPasswordBlur(true);
  };

  const handlePasswordChange = (e) => {
    const eventValue = e.target.value;
    setPassword(eventValue);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword)
  };
  const emailClassName = isEmailBlur && (Email === "" || !emailValidator.validate(Email)) ? "empty-error-msg" : "no-msg";
  const passwordClassName = isPasswordBlur && !password   ? "empty-error-msg" : "no-msg";
  const emailErrorMsg = !emailValidator.validate(Email) && (isEmailBlur && Email) ? "Please enter a valid email address" : "Email is Required";
  const passwordMsg = !password && isPasswordBlur ? "Password is Required" : "";
  
  const onClickForgotPassword = () => {
    Navigate("/forgot-password",{relative:"true"})
  }
  const handleLoginSubmit = async() => {
    const userDetails = {email:btoa(Email),password:btoa(password)}
    const options = {
      method:"POST",
      body : JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      }
    }
    try {
      const response = await fetch("https://localhost:7234/api/Auth/Login", options);
  
      if (response.ok) {
        const { jwtToken } = await response.json();
        const decodedToken = jwtDecode(jwtToken);
        const jwtEmail = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
        const jwtRole = [decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]];
        
        localStorage.setItem('AdminEmail', btoa(jwtEmail));
        localStorage.setItem('roles', JSON.stringify(jwtRole));
        Cookies.set('jwtToken', jwtToken, { expires: 30 });
        Navigate(redirectLink, { replace: true });
      } else {
        const errorResponse = await response.json();
        if (errorResponse && errorResponse.detail) {
          setLoginErrorMsg(errorResponse.detail);
        } else {
          setLoginErrorMsg("Unknown error occurred.");
        }
        setApiFailure(true);
        setTimeout(() => {
          setApiFailure(false);
        }, 2000);
      }
    } catch (error) {
      setLoginErrorMsg("An error occurred. Please try again.");
      setApiFailure(true);
      setTimeout(() => {
        setApiFailure(false);
      }, 2000);
    }
  }
    return(
      <div
      className="modal-container"
    >
      <div className="modal">
            <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1703760076/5828286_y1tt5f.jpg" alt="admin" className="log-in-img"/>
            <div className="log-in-container">
              <h1 className="login-heading">Login</h1>
              <div className="input-container">
            <input className="input" type="email" placeholder="Email Id" value={Email} onChange={handleEmailChange}  onBlur={emailBlurHandler} />
            <span className={emailClassName}>*{emailErrorMsg}</span></div>
            <div className="input-container">
            <div className="password-container">
              <input
                className="password-input"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={passwordBlurHandler}
                name="password"
                placeholder="Password"
              />
              <i onClick={togglePassword} className={password.length > 0 ? "icon" : "hide-icon"}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </i>
            </div>
            <span className={passwordClassName}>*{passwordMsg}</span></div>
            <button className="btn" onClick={handleLoginSubmit} >Login</button>
            <p className="forgot-password-text" onClick={onClickForgotPassword}>Forgot Password?</p>
            </div>
      </div>
      {apiFailure && <div className="notification" style={{backgroundColor:"red"}}>
            <div className="notification__body">
                <img
                    src="https://res.cloudinary.com/dy2gsniki/image/upload/v1704101878/cancel_190406_vspezp.png"
                    alt="failure"
                    className="notification__icon"
                />
                {loginErrorMsg}
            </div>
            <div className="notification__progress"></div>
        </div>}
    </div>
    )
};