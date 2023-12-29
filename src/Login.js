import "./Login.css";
import emailValidator from 'email-validator';
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
export default function Login({closeModal}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailBlur, setIsEmailBlur] = useState(false);
  const [isPasswordBlur, setIsPasswordBlur] = useState(false);
  const [invalidEmail,setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [iconClass, setIconClass] = useState("hide-icon");
  const [eyeIcon, setEyeIcon] = useState(<FaRegEye />);

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
  const passwordBlurHandler = (event) => {
    setIsPasswordBlur(true);
  };

  const handlePasswordChange = (e) => {
    const eventValue = e.target.value;
    setPassword(eventValue);
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (eventValue !== "") {
      setIconClass("icon");
      if (!passwordPattern.test(eventValue)) {
        setInvalidPassword(true);
      } else {
        setInvalidPassword(false);
      }
    }else {
      setInvalidPassword(false);
      setIconClass("hide-icon");
    } 
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setEyeIcon(<FaRegEyeSlash style={{color:"grey"}} />);
      return;
    }
    setPasswordType("password");
    setEyeIcon(<FaRegEye style={{color:"grey"}} />);
  };
  const emailClassName = isEmailBlur && (email === "" || invalidEmail) ? "empty-error-msg" : "no-msg";
  const passwordClassName = isPasswordBlur && (password ==="" || invalidPassword) ? "empty-error-msg" : "no-msg";
  const emailErrorMsg = invalidEmail && isEmailBlur? "Please enter a valid email address" : "Email is Required";
  const passwordMsg = invalidPassword && isPasswordBlur ? "Must Contain 8 Characters, One Uppercase,One Lowercase, One Number and One Special Case Character":"Password is Required";
    
    return(
      <div
      className="modal-container"
    >
      <div className="modal">
            <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1703760076/5828286_y1tt5f.jpg" alt="admin" className="log-in-img"/>
            <div className="log-in-container">
              <h1 className="login-heading">Login</h1>
              <div className="input-container">
            <input className="input" type="email" placeholder="Email Id" value={email} onChange={handleEmailChange}  onBlur={emailBlurHandler} />
            <span className={emailClassName}>*{emailErrorMsg}</span></div>
            <div className="input-container">
            <div className="password-container">
              <input
                className="password-input"
                type={passwordType}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={passwordBlurHandler}
                name="password"
                placeholder="Password"
              />
              <i onClick={togglePassword} className={iconClass}>
                {eyeIcon}
              </i>
            </div>
            <span className={passwordClassName}>*{passwordMsg}</span></div>
            <button className="btn" >Login</button>
            <p className="forgot-password-text">Forgot Password?</p>
            </div>
      </div>
    </div>
    )
};