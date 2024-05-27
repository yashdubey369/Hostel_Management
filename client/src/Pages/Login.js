import { useState } from 'react';

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
      const handleSubmit= async(e)=>{
        e.preventDefault();
     
      }
    return (
         <>
    <section>
     <main className="boxe">
 <form onSubmit={handleSubmit}>
   
     <div className="inputBox">
       <label htmlFor="email">email</label>
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