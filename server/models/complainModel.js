import {Schema,model} from "mongoose";

const complainSchema= new Schema({

    username:{type:String, required:true},
    roomNo:{type:String, required:true},
    message:{type:String, required:true},
});

const Complain = new model("Complain", complainSchema);
export default Complain;