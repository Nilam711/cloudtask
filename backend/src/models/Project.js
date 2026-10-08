import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  name:{type:String,required:true,trim:true,maxlength:120},
  description:{type:String,trim:true,maxlength:1500,default:""},
  status:{type:String,enum:["planned","active","completed","on_hold"],default:"planned"},
  startDate:{type:Date,default:null}, dueDate:{type:Date,default:null},
  owner:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true},
  members:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}]
},{timestamps:true});
export default mongoose.model("Project",projectSchema);
