let mongoose=require("mongoose");
let taskSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
    }
)
module.exports=mongoose.model("tasks",taskSchema);