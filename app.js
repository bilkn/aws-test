const express = require('express')
const app = express()
const PORT = 3000;


app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}.`)
})

app.get('/home',(req,res)=>{
    res.sendFile('index.html', {root: __dirname })
})


