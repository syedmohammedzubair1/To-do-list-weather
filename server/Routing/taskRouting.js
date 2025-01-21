let express=require("express");
let taskRouting=express.Router();
let Task=require("../models/taskModel");
taskRouting.get("/task",async(req,res)=>{
    try {
 let task=await Task.find();
    res.send(task);
} catch (error) {
    console.log(error);
}
});

taskRouting.post("/task",async(req,res)=>{
    try {
 let task=new Task(req.body);
 let result=task.save();
 res.send(result);
    res.send(task);
} catch (error) {
    console.log(error);
}
});
taskRouting.delete("/task/:id",async(req,res)=>{
    try {
let task=await Task.deleteOne({_id:req.params.id});
res.send(task);
} catch (error) {
    console.log(error);
}
});
taskRouting.get("/task/:id",async(req,res)=>{
    try {
let task=await Task.findOne({_id:req.params.id});
res.send(task);
} catch (error) {
    console.log(error);
}
});
taskRouting.put("/task/:id",async(req,res)=>{
    try {
        let task=await Task.updateOne({_id:req.params.id},{$set:req.body});
        res.send(task);
        } catch (error) {
            console.log(error);
            }
});


module.exports=taskRouting;