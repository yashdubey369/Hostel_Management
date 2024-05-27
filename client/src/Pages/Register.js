import { useState } from 'react';


 const Register =()=>{

    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
       

    });

   
     const handleInput=(e)=>{
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
        setUser({
          
            ...user,
          
            [name]:value,

        })
     }


     const handleSubmit =async(e)=>{
            e.preventDefault();
            console.log(user);
          
     }
   return (
    <>
   <section>
    <main className="boxe">
<form onSubmit={handleSubmit}>
    <div className="inputBox">
    <label htmlFor="username">username</label>
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
    </div>
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
      <label htmlFor="phone">Phone</label>
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
  
    <button type="submit" style={{ float: 'left' }}>Signup</button>
</form>
    </main>
   </section>
    </>
   )
}

export default Register;