import mongoose from "mongoose";
const activitySchema=new mongoose.Schema({task:{type:mongoose.Schema.Types.ObjectId,ref:"Task",default:null,index:true},project:{type:mongoose.Schema.Types.ObjectId,ref:"Project",default:null,index:true},user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},action:{type:String,required:true,maxlength:120},details:{type:String,default:"",maxlength:500}},{timestamps:true});
export default mongoose.model("Activity",activitySchema);
