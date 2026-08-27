import express from 'express'
const app=new express()

// Use express.json() middleware to parse JSON bodies
app.use(express.json())

// Define a POST route to handle JSON data
app.post('/data',(req,res)=>{

    // Access the parsed JSON data from req.body
    console.log(req.body)

    // Send a response
    res.send("Data recieved")
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})