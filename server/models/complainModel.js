const {Schema,model}=require("mongoose");

const complainSchema= new Schema({

    username:{type:String, required:true},
    email:{type:String, required:true},
    message:{type:String, required:true},
});

const Complain = new model("Complain", complainSchema);
export default Complain;