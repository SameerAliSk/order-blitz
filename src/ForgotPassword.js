import"./Login.css";
import emailValidator from 'email-validator';
import { useState } from "react";
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [invalidEmail,setInvalidEmail] = useState(false);
  const [isEmailBlur, setIsEmailBlur] = useState(false);
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
              <button className="btn" >Verify Email</button>
              </div>
        </div>
      </div>
      )
}