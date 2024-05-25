const errorhandlerMW=((err,req,res,next)=>{
    const status=err.status||401;
    const msg = err.msg ||"Oops! something went wrong";
   
  return res.status(status).json({msg});
});
export default errorhandlerMW;