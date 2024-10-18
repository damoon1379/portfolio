const express = require('express')

const app = express()
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(5000,()=>console.log('listening on port 5000'))