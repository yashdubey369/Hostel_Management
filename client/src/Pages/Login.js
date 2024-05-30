import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import {useCustomConsumerData} from '../localStorage/authenticateToken';
const URL="http://localhost:8000/login"
const Login =()=>{
    const [user,setUser]=useState({
        email:"",
        password:"",
    });

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value,

        })
    }
    const navigate=useNavigate();
    const  {localStorageTokenStore}=useCustomConsumerData();
      const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
        const status=await fetch(URL,{
           method:"POST",
           headers:{
               "Content-Type":"application/json",
           },
           body:JSON.stringify(user),
        })
        const statusReport=await status.json();
        if(status.ok){
         
          //for handling of props drilling , using context api from there we call this function or for every program 
          //may be using redux concept later
          localStorageTokenStore(statusReport.token);
          setUser( { 
          email:"",
         
          password:"",})
          navigate("/");
        }
        else{
          alert("invalid details");
        }
      }
      catch(err){
            console.log(err);
      }
      }
    return (
         <>
    <section>
     <main className="boxe">
 <form onSubmit={handleSubmit}>
   
     <div className="inputBox">
       <label htmlFor="email">email</label>
       <i class="far fa-envelope"></i>
       <input
         type="email"
         name="email"
         id="email"
         placeholder="type your email"
         required
         autoComplete="off"
         value={user.email}
         onChange={handleInput}
       />
     </div>
    
     <div className="inputBox">
       <label htmlFor="password">Password</label>
       <i class="fas fa-lock"></i>
       <input
         type="password"
         name="password"
         id="password"
         placeholder="type your password"
         required
         autoComplete="off"
         value={user.password}
         onChange={handleInput}
       />
     </div>
   
     <button type="submit" style={{ float: 'left' }}>Login</button>
 </form>
     </main>
    </section>
     </>
     )
}
export default Login;