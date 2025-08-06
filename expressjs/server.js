import express from "express";
const app = express()
let count = 0

//get is the by default request method
app.set('view engine', 'ejs')
app.get('/',(req, res) => {
    console.log('/ route function called ', count, "times")
    // res.sendStatus(200)
    // res.send("Home page")
    // res.status(200).send("Home Page")
    // res.json({username : 'kartik'})
    // res.download('./server.js')
const username = 'Kartik Kumar'
    //rendering html
    res.render('home',{username})
    ++count
})
app.listen(3000)