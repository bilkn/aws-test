const express = require('express')
const app = express()
const PORT = 80;

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}.`)
})

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the EC2 INSTANCE!</h1>')
})


