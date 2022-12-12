
import React, { useState } from "react";
import fire from './FirebaseAuth'
import './Login.css'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  const  handleSubmit = (event) =>{
    event.preventDefault()
    console.log(email,password);
    fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
      alert("Login success")
      
    }).catch((error)=>{
      alert("No user exist | ",error);
    })
  }

//   const Logout = ()=>{
//     fire.auth().signOut();
//     alert("Log out Successfully")
//   }

  return (
    <div >
   
        <main>
          <form className="form_class" onSubmit={handleSubmit}>
            <div className="form_div">
              <label>Email:</label>
              <input className="field_class" type="text" placeholder="Enter Your Email"
                id="exampleInputEmail1"
              onChange={(ev)=>setEmail(ev.target.value)} />
              <label>Password:</label>
              <input  className="field_class"  type="password" placeholder="Enter Your Password"
               id="exampleInputPassword1"
                 onChange={(ev)=>setPassword(ev.target.value)} />
              <button className="submit_class" type="submit" >Login</button>
            </div>
            <div className="info_div">
              <p>Forgot Your Password ?</p>
            </div>
          </form>
        </main>
   
      </div>
    
  );
}


