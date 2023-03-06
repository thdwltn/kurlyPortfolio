import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css'

function SignIn() {
  let history = useNavigate();

    const [login,setLogin] = useState(false);
    const [id,setId] = useState("");
    const [nick,setNick] = useState("");
    const [password,setPassword] = useState("");
    const [passwordChk,setPasswordChk] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [date,setDate] = useState("");

    const onChange = (e) => {
      const{
        target : {name,value},
    } = e;
    if(name === "id"){
        setId(value);
    }
    if(name === "nick"){
        setNick(value);
    }
    if(name === "password"){
        setPassword(value);
    }
    if(name === "passwordChk"){
        setPasswordChk(value);
    }
    if(name === "email"){
        setEmail(value);
    }
    if(name === "phone"){
        setPhone(value);
    }
    if(name === "date"){
        setDate(value);
    }
    }

    const onSubmit = async(e)=>{
      const USER = JSON.parse(localStorage.getItem("USERS"));
      e.preventDefult();
  }

  return (
    <div className="SingIn">
      <div>
        <h3>회원가입</h3>
      <ul>
        <li><input type="text" placeholder="아이디" name="id" value={id} /></li>
        <li><input type="text" placeholder="닉네임" name="nick" value = {nick}/></li>
        <li><input type="password" placeholder="비밀번호" name="passwort" value={password}/></li>
        <li><input type="password" placeholder="비밀번호 확인" name="passwordChk" value={passwordChk}/></li>
        <li><input type="email" placeholder="이메일" name="email" value={email}/></li>
        <li><input type="tel" placeholder="전화번호" name="phone" value={phone}/></li>
        <li><input type="date" placeholder="생년월일" name="name" value={date}/></li>
        
      </ul>
      <p><input type="checkbox"/>마케팅 동의</p>
        <p><button type="submit">회원가입 완료</button></p>
        <p><button type="button" onClick={()=> history(-1)}>돌아가기</button></p>
        </div>
    </div>
  );
}

export default SignIn;
