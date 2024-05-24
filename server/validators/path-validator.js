import {z} from "zod";
const signupSchema=z.object({
    username:z
    .string({required_error:"username  required"})
    .trim()
    .min(3,{message:"username is at least 3 character"})
    .max(50,{message:"username is at max 50 character"}),
  
    email:z
    .string({required_error:"email  required"})
    .trim()
    .min(3,{message:"email is at least 3 character"})
    .max(50,{message:"email is at max 30 character"}),
  
    phone:z
    .string({required_error:"phone  required"})
    .trim()
    .min(10,{message:"phone is at least 10 digit"})
    .max(20,{message:"phone is at max 30 digit"}),
    password:z
    .string({required_error:"password  required"})
    .trim()
    .min(4,{message:"password is at least 4 digit"})
    .max(20,{message:"password is at max 30 digit"}),
   
});
export default signupSchema;