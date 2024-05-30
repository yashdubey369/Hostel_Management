import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {useCustomConsumerData}  from '../localStorage/authenticateToken';
const URL="http://localhost:8000/register";
 const Register =()=>{

    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
       

    });

    const navigate=useNavigate();
   const {localStorageTokenStore}=useCustomConsumerData();
     const handleInput=(e)=>{
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
        value = value.replace("+91", "");
        setUser({
          
            ...user,
          
            [name]:value,

        })
     }


     const handleSubmit =async(e)=>{
            e.preventDefault();
            console.log(user);
            try{
            const status=await fetch(URL,{
              method:"POST",
              headers:{
                "Content-Type":"application/json",

              },
              body:JSON.stringify(user),
            });
          
            const statusReport=await status.json();
          
            if(status.ok){

              //for handling of props drilling , using context api from there we call this function or for every program 
              //may be using redux concept later
              localStorageTokenStore(statusReport.token);
              setUser( { username:"",
              email:"",
              phone:"",
              password:"",})
              
            navigate("/login");
            }
            else{
              alert(statusReport.msg);
            }
          
            }catch(err){
              console.log("erroe during reg",err);
            }
     }
   return (
    <>
   <section>
    <main className="boxe">
<form onSubmit={handleSubmit}>
    <div className="inputBox">
    <label htmlFor="username">username</label>
<i class="fa-solid fa-user-pen"></i>
    <input
    type="text"
    name="username"
    placeholder="username"
    id="username"
    required
    autoComplete="off"
    value={user.username}
    onChange={handleInput}
   />
    <div class="error"></div>
    </div>
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
       <div class="error"></div>
    </div>
    <div className="inputBox">
      <label htmlFor="phone">Phone</label>
<i class="fa-solid fa-phone"></i>
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="type your phone"
        required
        autoComplete="off"
        value={user.phone}
        onChange={handleInput}
      />
       <div class="error"></div>
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
       <div class="error"></div>
    </div>
  
    <button type="submit" style={{ float: 'left' }}>Signup</button>
</form>
    </main>
   </section>
    </>
   )
}

export default Register;
