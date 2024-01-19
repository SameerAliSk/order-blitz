import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie";

import "../Css/RestrictedAccess.css"
export function RestrictedAccess(props) {
    const navigate = useNavigate();
    const { redirectTo, unAuthorized } = props;
  
    const onClickLogin = () => {
      navigate(`/?redirectTo=${redirectTo}`);
    };
    const onClickLoginAsAdmin = () => {
      localStorage.clear();
      Cookies.remove('jwtToken');
      navigate(`/?redirectTo=${redirectTo}`);
    };
  
    return (
        <div className="authentication-container" >
        {unAuthorized ? (<div>
           <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1704273361/3805046_c5sier.jpg" alt="authorization required" className="authentication-img" />
           <h1 style={{color:"#29ab87"}}>We are Sorry...</h1>
           <p style={{color:"#29ab87",fontWeight:"600"}}>Access Restricted. This section is exclusively for admin use.
            </p>
           <p style={{color:"#29ab87",fontWeight:"600"}}> Please log in with authorized admin credentials or contact the administrator for assistance.</p>
           <button onClick={onClickLoginAsAdmin} style={{backgroundColor:"#29ab87"}} className="login-btn">Login</button>
        </div>) :(<div>
        <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1704273361/3819659_juzlch.jpg" alt="authentication required" className="authentication-img" />
        <h1 style={{color:"#e34234"}}>Authentication Required...</h1>
        <p style={{color:"#e34234",fontWeight:"500"}}>Login to access this page</p>
        <button onClick={onClickLogin} className="login-btn">Login</button>
     </div>)}
     </div>
    )
  }