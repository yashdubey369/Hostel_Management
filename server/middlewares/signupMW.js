const validation = (schema)=>async (req,res,next)=>{
    try{
    const parseBody= await schema.parseAsync(req.body);
    req.body=parseBody;
 next();
    }
    catch(err){
        const status= 401;
       // const message="fill the  details properly";
        const message=err.errors[0].message;
       
        console.log(message);
res.status(400).json({msg:message});

    }
};
export default validation;
