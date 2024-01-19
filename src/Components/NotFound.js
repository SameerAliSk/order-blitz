import "../Css/NotFound.css"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate();
    
  
    const onClickLogin = () => {
      navigate("/",{replace:"true"});
    };
    return(
        <div className="notFound-container">
            <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1704348818/3819740_kh4cio.jpg" alt="404" className="NotFound-img" />
            <button onClick={onClickLogin} className="login-btn">Login</button>
        </div>
    )
}