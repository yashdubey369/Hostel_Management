


import {useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {loginSchema} from "../schemas/signUp.jsx";
import {useCustomConsumerData} from '../localStorage/authenticateToken';
const URL="http://localhost:8000/login"
const initialValues={
 
  email:"",

  password:"",
  
}

const Login =()=>{

  const{values,errors,touched, handleBlur,handleChange} =useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit:(values)=>{
   
    }
  })
  
    const navigate=useNavigate();
    const  {localStorageTokenStore}=useCustomConsumerData();
      const handleSubmit= async(e)=>{
        e.preventDefault();
        if ( errors.email ||errors.password) {
  
          return; 
        }
        try{
        const status=await fetch(URL,{
           method:"POST",
           headers:{
               "Content-Type":"application/json",
           },
           body:JSON.stringify(values),
        })
        const statusReport=await status.json();
        if(status.ok){
         
          //for handling of props drilling , using context api from there we call this function or for every program 
          //may be using redux concept later
          localStorageTokenStore(statusReport.token);
         
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
         value={values.email}
         onChange={handleChange}
         onBlur={handleBlur}
       />
        {errors.email && touched.email ?<p className="form-error">{errors.email}</p>:null}
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
         value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
       />
        {errors.password && touched.password ?<p className="form-error">{errors.password}</p>:null}
     </div>
   
     <button type="submit" style={{ float: 'left' }}>Login</button>
 </form>
     </main>
    </section>
     </>
     )
}
export default Login;