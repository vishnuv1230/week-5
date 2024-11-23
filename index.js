
const express=require('express')
const app=express();
const port=3030;
app.get('/',(req,res)=>{
  res.send("Hello from DJ Hostel")
})
app.listen(port,()=>{
  console.log(`app running on ${port}`)
})
