const validation = (schema)=>async (req,res,next)=>{
    try{
    const parseBody= await schema.parseAsync(req.body);
    req.body=parseBody;
 next();
    }
    catch(err){
        const status= 401;
       
        const msg=err.errors[0].message;
        const error ={
            status,
            msg,
           
        };
next(error);

    }
};
export default validation;
