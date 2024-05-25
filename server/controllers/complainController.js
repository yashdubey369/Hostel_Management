import Complain from "../models/complainModel.js";

const complaint= async (req,res)=>{
    try{
        const response = req.body;
        await Complain.create(response);
        return res.status(200).json({msg:"Hey Mohan,complain send successfully!"});
    }catch(error){
        return res.status(501).json({msg:"Oops Mohan,complain is not send!"})
    }
};
export default complaint;
