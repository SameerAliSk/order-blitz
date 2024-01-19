import"../../Css/Authentication/Login.css";
import { useState,useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [inputBlur, setInputBlur] = useState({
    password: false,
    confirmPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const [resetErrorMsg,setResetErrorMsg] = useState("");
    const [apiFailure,setApiFailure] = useState(false);
    const Navigate = useNavigate();

    useEffect(() => {
      if (!email) {
        Navigate("/forgot-password"); 
      }
    }, [email, Navigate]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleInputBlur = (field) => {
      setInputBlur({ ...inputBlur, [field]: true });
    };
  
    const togglePasswordVisibility = (field) => {
      if (field === "password") {
        setShowPassword(!showPassword);
      } else {
        setShowConfirmPassword(!showConfirmPassword);
      }
    };
    const handleResetPasswordForm = async () => {
      if (password === "" || confirmPassword === "") {
        setResetErrorMsg("Please enter a password in both fields.");
        setApiFailure(true);
      } else if (inputError.password) {
        setResetErrorMsg("Password must contain at least 8 characters including one uppercase letter, one lowercase letter, one number, and one special character");
        setApiFailure(true);
      } else if (inputError.confirmPassword) {
        setResetErrorMsg("Passwords do not match. Please re-enter.");
        setApiFailure(true);
      } else {
        try {
          const userDetails = { email: btoa(email), password: btoa(password) };
          const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json',
            }
          };
          const response = await fetch("https://localhost:7234/api/Auth/reset-password", options);
          if (response.ok) {
            Navigate("/", { replace: "true" });
          } else {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    const { password, confirmPassword } = formData;
    const inputError = {
      password: inputBlur.password && (!password || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)),
      confirmPassword: inputBlur.confirmPassword && (confirmPassword === "" || confirmPassword !== password),
    };
  
    const errorMessage = {
      password: inputError.password ? (password === "" ? "Password is Required" : "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Case Character") : "",
      confirmPassword: inputError.confirmPassword ? (confirmPassword === "" ? "Confirm password is Required" : "Passwords do not match") : "",
    };

      
        return(
          <div className="modal-container" >
          <div className="modal">
                <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1703760076/5828286_y1tt5f.jpg" alt="admin" className="log-in-img"/>
                <div className="log-in-container">
                  <h1 className="login-heading">Reset Password</h1>
            <div className="input-container">
            <div className="password-container">
              <input
                className="password-input"
                type={showPassword ? "text" : "password"}
                value={password}
                name="password"
                placeholder="Password"
                onChange={(e) => handleInputChange(e)}
                onBlur={() => handleInputBlur("password")}
                
              />
              <i onClick={() => togglePasswordVisibility("password")} className={password.length > 0 ? "icon" : "hide-icon"}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </i>
            </div>
            <span className={inputError.password ? "empty-error-msg" : "no-msg"}>*{errorMessage.password}</span></div>
            <div className="input-container">
            <div className="password-container">
              <input
                className="password-input"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
                onBlur={() => handleInputBlur("confirmPassword")}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <i onClick={() => togglePasswordVisibility("confirmPassword")} className={confirmPassword.length > 0 ? "icon" : "hide-icon"}>
              {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </i>
            </div>
            <span className={inputError.confirmPassword ? "empty-error-msg" : "no-msg"}>*{errorMessage.confirmPassword}</span></div>
                <button className="btn" onClick={handleResetPasswordForm} >Reset Password</button>
                </div>
          </div>
          {apiFailure && <div className="notification" style={{backgroundColor:"red"}}>
            <div className="notification__body">
                <img
                    src="https://res.cloudinary.com/dy2gsniki/image/upload/v1704101878/cancel_190406_vspezp.png"
                    alt="failure"
                    className="notification__icon"
                />
                {resetErrorMsg}
            </div>
            <div className="notification__progress"></div>
        </div>}
        </div>
        )
}