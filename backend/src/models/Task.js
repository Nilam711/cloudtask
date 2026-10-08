import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title:{type:String,required:true,trim:true,maxlength:200},
  description:{type:String,trim:true,maxlength:3000,default:""},
  status:{type:String,enum:["todo","in_progress","review","completed"],default:"todo",index:true},
  priority:{type:String,enum:["low","medium","high","critical"],default:"medium",index:true},
  dueDate:{type:Date,default:null,index:true},
  tags:[{type:String,trim:true,maxlength:30}],
  project:{type:mongoose.Schema.Types.ObjectId,ref:"Project",default:null,index:true},
  assignedTo:{type:mongoose.Schema.Types.ObjectId,ref:"User",default:null,index:true},
  createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true}
},{timestamps:true});
taskSchema.index({createdBy:1,status:1,priority:1});
taskSchema.index({createdBy:1,createdAt:-1});
export default mongoose.model("Task",taskSchema);
