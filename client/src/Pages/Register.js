












import { useNavigate } from 'react-router-dom';
import  {useCustomConsumerData}  from '../localStorage/authenticateToken';
import { useFormik } from 'formik';
import{ signupSchema }from "../schemas/signUp.jsx";
const URL="http://localhost:8000/register";

const initialValues={
  username:"",
  email:"",
  phone:"",
  password:"",
  
}
 const Register =()=>{
 
  const{values,errors,touched, handleBlur,handleChange} =useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit:(values)=>{
   
    }
  })
 
  
    const navigate=useNavigate();
   const {localStorageTokenStore}=useCustomConsumerData();


     const handleSubmit =async(e)=>{
            e.preventDefault();
            if (errors.username || errors.email || errors.phone || errors.password) {
            
             
              return; 
            }
          
            try{
            const status=await fetch(URL,{
              method:"POST",
              headers:{
                "Content-Type":"application/json",

              },
              body:JSON.stringify(values),
            });
          
            const statusReport=await status.json();
          
            if(status.ok){

              //for handling of props drilling , using context api from there we call this function or for every program 
              //may be using redux concept later
              localStorageTokenStore(statusReport.token);
            
              
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
    value={values.username}
    onChange={handleChange}
    onBlur={handleBlur}
   />
    {errors.username && touched.username ?<p className="form-error">{errors.username}</p>:null}
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
        value={values.email}
        onChange={handleChange}
        
        onBlur={handleBlur}
      />
       {errors.email && touched.email ?<p className="form-error">{errors.email}</p>:null}
    </div>
    <div className="inputBox">
      <label htmlFor="phone">Phone</label>
<i class="fa-solid fa-phone"></i>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="type your phone"
        required
        autoComplete="off"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
        {errors.phone && touched.phone ?<p className="form-error">{errors.phone}</p>:null}
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
  
    <button type="submit" style={{ float: 'left' }}>Signup</button>
</form>
    </main>
   </section>
    </>
   )
}

export default Register;
