 const express = require("express");
 const app = express();
 const cors = require('cors');
 const userRouter = require('./routes/routes');

 const port =4202

 var corsOption ={
    origin: 'http://localhost:4200',
}
app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Master H is working")
});

app.use("/api/",userRouter);
 
 app.listen(port,() =>{
     console.log(`Server is listening on port ${port}` );
 });