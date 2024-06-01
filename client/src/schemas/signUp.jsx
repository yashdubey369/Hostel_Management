import * as yup from "yup";

 const signupSchema=yup.object({
    username:yup.string().min(2).max(50).required("please enter your username."),
    email:yup.string().email().required("please enter your email."),
    phone:yup.string().min(10).max(30).required("please enter your phone No.").matches(/^\d+$/, "Phone number must contain only digits"),
    password:yup.string().min(4).max(50).required("please enter your password.")
    

})

const loginSchema=yup.object({
   
    email:yup.string().email().required("please enter your email."),

    password:yup.string().min(4).max(50).required("please enter your password.")
    

})
export  {signupSchema,loginSchema};