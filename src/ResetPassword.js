import "./Login.css";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [isPasswordBlur, setIsPasswordBlur] = useState(false);
    const [isConfirmPasswordBlur,setIsConfirmPasswordBlur] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [ConfirmPasswordType, setConfirmPasswordType] = useState("password");
    const [iconClass, setIconClass] = useState("hide-icon");
    const [confirmPasswordIconClass,setConfirmPasswordIconClass] = useState("hide-icon");
    const [eyeIcon, setEyeIcon] = useState(<FaRegEye />);
    const [confirmPasswordIcon,setConfirmPasswordIcon]= useState(<FaRegEye />)
   
    
    const passwordBlurHandler = () => {
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
        passwordBlurHandler();
        setInvalidPassword(false);
        setIconClass("hide-icon");
      } 
    };
    const togglePassword = () => {
      if (passwordType === "password") {
        setPasswordType("text");
        setEyeIcon(<FaRegEyeSlash />);
        return;
      }
      setPasswordType("password");
      setEyeIcon(<FaRegEye/>);
    };
    const confirmPasswordBlurHandler = () => {
      setIsConfirmPasswordBlur(true);
    };
    const handleConfirmPasswordChange = (e) => {
      const eventValue = e.target.value;
      setConfirmPassword(eventValue);
     
      if (eventValue !== "") {
        setConfirmPasswordIconClass("icon");
        if (eventValue !== password) {
          setInvalidConfirmPassword(true);
        } else {
          setInvalidConfirmPassword(false);
        }
      }else {
        confirmPasswordBlurHandler();
        setInvalidConfirmPassword(false);
        setConfirmPasswordIconClass("hide-icon");
      } 
    };
    const toggleConfirmPassword = () => {
      if (ConfirmPasswordType === "password") {
        setConfirmPasswordType("text");
        setConfirmPasswordIcon(<FaRegEyeSlash />);
        return;
      }
      setConfirmPasswordType("password");
      setConfirmPasswordIcon(<FaRegEye/>);
    };

    const passwordClassName = isPasswordBlur && (password ==="" || invalidPassword) ? "empty-error-msg" : "no-msg";
    const confirmPasswordClassName = isConfirmPasswordBlur && (confirmpassword ==="" || invalidConfirmPassword) ? "empty-error-msg" : "no-msg";
    const passwordMsg = invalidPassword && isPasswordBlur ? "Must Contain 8 Characters, One Uppercase,One Lowercase, One Number and One Special Case Character":"Password is Required";
    const confirmPasswordMsg = invalidConfirmPassword && isConfirmPasswordBlur ? "Passwords do not match" : "Confirm Password is Required"
        return(
          <div
          className="modal-container"
        >
          <div className="modal">
                <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1703760076/5828286_y1tt5f.jpg" alt="admin" className="log-in-img"/>
                <div className="log-in-container">
                  <h1 className="login-heading">Reset Password</h1>
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
            <div className="input-container">
            <div className="password-container">
              <input
                className="password-input"
                type={ConfirmPasswordType}
                id="password"
                value={confirmpassword}
                onChange={handleConfirmPasswordChange}
                onBlur={confirmPasswordBlurHandler}
                name="confirm password"
                placeholder="Confirm Password"
              />
              <i onClick={toggleConfirmPassword} className={confirmPasswordIconClass}>
                {confirmPasswordIcon}
              </i>
            </div>
            <span className={confirmPasswordClassName}>*{confirmPasswordMsg}</span></div>
                <button className="btn" >Reset Password</button>
                </div>
          </div>
        </div>
        )
}