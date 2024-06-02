
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
 
  const{values,errors,touched,handleBlur,handleChange} =useFormik({
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

     
     const renderValidationIcon = (fieldName) => {
      if (values[fieldName] !== '') {
        if (errors[fieldName]) {
         
          return (
            <span className="validation-icon error">
              <i className="fa-solid fa-circle-exclamation"></i>
            </span>
          );
        } else {
         
          return (
            <span className="validation-icon success">
              <i className="fa-solid fa-circle-check"></i>
            </span>
          );
        }
      }
      return null;
    };
    
   return (
    <>
   <section>
    <main className="boxe">
<form onSubmit={handleSubmit}>
    <div className="inputBox">
    <label htmlFor="username">username</label>
    {renderValidationIcon("username")}

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
    error={errors.username}
    touched={touched.username}
    style={{
      borderBottom: `${values.username === '' ? '1px solid #ccc' : (errors.username ? '1px solid red' : '1px solid #09c372')}`,
    }}
   
   />
   
    {errors.username && touched.username ?<p className="form-error">{errors.username}</p>:null}
 
    
    </div>
    <div className="inputBox">
      <label htmlFor="email">email</label>
      {renderValidationIcon("email")}

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
        error={errors.email}
        touched={touched.email}
        style={{
          borderBottom: `${values.email === '' ? '1px solid #ccc' : (errors.email? '1px solid red' : '1px solid #09c372')}`,
        }}
      />
       {errors.email && touched.email ?<p className="form-error">{errors.email}</p>:null}

     
    </div>
    <div className="inputBox">
      <label htmlFor="phone">Phone</label>
      {renderValidationIcon("phone")}

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
        error={errors.phone}
        touched={touched.phone}
        style={{
          borderBottom: `${values.phone === '' ? '1px solid #ccc' : (errors.phone ? '1px solid red' : '1px solid #09c372')}`,
        }}
      />
        {errors.phone && touched.phone ?<p className="form-error">{errors.phone}</p>:null}
        
     
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
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
        style={{
          borderBottom: `${values.password === '' ? '1px solid #ccc' : (errors.password ? '1px solid red' : '1px solid #09c372')}`,
        }}
      />
        {errors.password && touched.password ?<p className="form-error">{errors.password}</p>:null}
    
          {renderValidationIcon("password")}
    </div>
  
    <button type="submit" style={{ float: 'left' }}>Signup</button>
</form>
    </main>
   </section>
    </>
   )
}

export default Register;
