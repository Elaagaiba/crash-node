const express = require("express");
const morgan = require('morgan');

//express app 
const app = express();

//register view engie
app.set('view engine' ,'ejs')

//listen for request 
app.listen(3000);

//middleware 
app.use(morgan('dev'))

//static middleware
app.use(express.static('public'))

app.get('/', (req,res) => {
    const blogs = [
        {title: 'youd zohi' , snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'ayoud mahi' , snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'zalia moghad' , snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'nassir mofi' , snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    ];
    res.render('index' , {title: 'home',blogs} );
});

app.get('/about', (req,res) => {
    res.render('about', {title: 'about'})
});

app.get('/blogs/create',(req, res) => {
    res.render('create', {title: 'create'})
})
//redirect 
// app.get('/about_us', (req ,res) => {
//     res.redirect('/about')
// });


//404 !!! you should write it in the buttom of the direction pages 
app.use((req , res) => {
    res.status(404).render('404')
})
