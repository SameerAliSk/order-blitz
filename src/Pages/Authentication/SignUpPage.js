import"../../Css/Authentication/Login.css";
import emailValidator from 'email-validator';
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Cookies from 'js-cookie';
export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [inputBlur, setInputBlur] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiResponse,setApiResponse] = useState(false);
  const [apiMessage,setApiMessage] = useState("");
  const [successApiIcon,setSuccessApiIcon] = useState(true);
  const [successBackgroundColor,setSuccessBackgroundColor] = useState("red")
  const jwtToken = Cookies.get("jwtToken");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pathName = queryParams.get('pathname');
  const redirectTo = pathName || "/dashboard"

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email' && value !== "") {
      setInputBlur({ ...inputBlur, email: !emailValidator.validate(value) });
    }
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
  const handleSignUpForm = async () => {
    try {
      const { email, password, confirmPassword } = formData;

      const invalidEmail = !emailValidator.validate(email);
      const invalidPassword = !password || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password);
      const invalidConfirmPassword = confirmPassword !== password;

      if (!invalidEmail && !invalidPassword && !invalidConfirmPassword) {
        const userDetails = { email: btoa(email), password: btoa(password) };
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            Authorization:`Bearer ${jwtToken}`
          },
        };
        const response = await fetch("https://localhost:7234/api/Auth/register", options);
        console.log("response",response);

        if (response.status === 201) {
          setApiResponse(true);
          setApiMessage("New admin successfully added.🚀");
          setSuccessBackgroundColor("#009e60");
          setSuccessApiIcon(true);
          setTimeout(() => {
            navigate(redirectTo, { replace: true });
          }, 1500);
        } else {
          setApiResponse(true);
          setApiMessage("Failed to Add Admin. Please check your details and try again.😞");
          setSuccessBackgroundColor("red");
          setSuccessApiIcon(false);
          setTimeout(() => {
            setApiResponse(false);
          }, 2000);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const { email, password, confirmPassword } = formData;
  const inputError = {
    email: inputBlur.email && (email === "" || !emailValidator.validate(email)),
    password: inputBlur.password && (!password || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)),
    confirmPassword: inputBlur.confirmPassword && (confirmPassword === "" || confirmPassword !== password),
  };

  const errorMessage = {
    email: inputError.email ? (email === "" ? "Email is Required" : "Please enter a valid email address") : "",
    password: inputError.password ? ( password === "" ? "Password is Required": "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character") : "",
    confirmPassword: inputError.confirmPassword ? (confirmPassword ==="" ? "Confirm password is Required" : "Passwords do not match") : "",
  };
    return(
      <div
      className="modal-container"
    >
      <div className="modal">
            <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1703760076/5828286_y1tt5f.jpg" alt="admin" className="log-in-img"/>
            <div className="log-in-container">
              <h1 className="login-heading">Add Admin</h1>
              <div className="input-container">
            <input className="input" type="email" placeholder="Email Id" value={email} onChange={(e) => handleInputChange(e)}
              onBlur={() => handleInputBlur("email")}
              name="email" />
            <span className={inputError.email ? "empty-error-msg" : "no-msg"}>*{errorMessage.email}</span></div>
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
            <button className="btn" onClick={handleSignUpForm} >Add Admin</button>
            </div>
            </div>
            {apiResponse && <div className="notification" style={{backgroundColor:successBackgroundColor}}>
            <div className="notification__body">
                <img
                    src={successApiIcon ? "https://res.cloudinary.com/dy2gsniki/image/upload/v1704101878/check_5610944_j7xyqh.png" : "https://res.cloudinary.com/dy2gsniki/image/upload/v1704101878/cancel_190406_vspezp.png"}
                    alt="Success"
                    className="notification__icon"
                />
                {apiMessage}
            </div>
            <div className="notification__progress"></div>
        </div>}
      </div>
    )
}
