import {z} from "zod";
const signup=z.object({
    username:z
    .string({required_error:"username  required"})
    .trim()
    .min(3,{message:"username is at least 3 character"})
    .max(50,{message:"username is at max 50 character"}),
  
    email:z
    .string({required_error:"email  required"})
    .trim()
    .min(3,{message:"email is at least 3 character"})
    .max(50,{message:"email is at max 30 character"})
    .email({ message: "Please enter a valid email address" })
    .refine((value) => {
        // Custom refinement to check for "@" and "."
        return value.includes("@") && value.includes(".");
      }, { message: "Please enter a valid email address" }),
  
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
const login=z.object({
   
    email:z
    .string({required_error:"email  required"})
    .trim()
    .min(3,{message:"email is at least 3 character"})
    .max(50,{message:"email is at max 30 character"}),
    // .email({ message: "Please enter a valid email address" })
    // .refine((value) => {
    //     // Custom refinement to check for "@" and "."
    //     return value.includes("@") && value.includes(".");
    //   }, { message: "Please enter a valid email address" }),
    password:z
    .string({required_error:"password  required"})
    .trim()
    .min(4,{message:"password is at least 4 digit"})
    .max(20,{message:"password is at max 30 digit"}),
   
});
export  {signup,login};