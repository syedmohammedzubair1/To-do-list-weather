let express=require("express");
const app=express();
app.use(express.json());
let cors=require("cors")
app.use(cors());
require(`./databases/dbconfig`)
let taskRouting=require("./Routing/taskRouting");
app.listen(9000);
app.get("/",(req,res)=>{
    res.send("<h2>Hi this is Sohaib Samad</h2>")
});

app.use("/",taskRouting);