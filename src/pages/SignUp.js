import { Link } from "react-router-dom";
import './SignUp.css'
function SignUp() {
  return (
    <div className="SingUp">
   
      <h3>로그인</h3>
      <div className="input">
        <input type="text" placeholder="ID"/>
        <input type="password" placeholder="PASSWORD"/>
      </div>
      <div className="loginBtn">
        <button type="submit">로그인</button>
        <button type="submit"><Link to="/signin">회원가입</Link></button>
      </div>
      
    </div>
  );
}

export default SignUp;
