const express = require("express");

//express app 
const app = express();

//register view engie
app.set('view engine' ,'ejs')

//listen for request 
app.listen(3000);

app.get('/', (req,res) => {
    res.render('index' )
});

app.get('/about', (req,res) => {
    res.render('about')
});

app.get('/blogs/create',(req, res) => {
    res.render('create')
})
//redirect 
// app.get('/about_us', (req ,res) => {
//     res.redirect('/about')
// });


//404 !!! you should write it in the buttom of the direction pages 
app.use((req , res) => {
    res.status(404).render('404')
})
