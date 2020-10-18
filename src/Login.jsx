
import React, { useState } from "react";

function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        props.history.push('/Dashboard')
      }
      function validateForm() {
        return email.length > 0 && password.length > 0;
      }
    return(
     <div className="Login">
      <form onSubmit={handleSubmit}>        
          <label>Email</label>
          <input
            autoFocus
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
      
        
          <label>Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
       
        <button  disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
        
    );

}
export default Login;