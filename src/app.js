const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 9005;
// console.log(path.join(__dirname,"../public"));


app.set('view engine', 'hbs');

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));//this we are using for css to be included
const template_path = path.join(__dirname,"../templates/views");
app.set("views" ,template_path);

const partials_path = path.join(__dirname,"../templates/partials");
//to use partials we have to register it first in hbs engine

hbs.registerPartials(partials_path);

//since this view engine always looks for views directory but now this directory is not inside project but nested in templates of project so we set the path


app.get("" ,(req,res)=>{
    res.render("index");
})

app.get("/about" ,(req,res)=>{
    res.render("about");
})


app.get("/weather" ,(req,res)=>{
    res.render("weather");
})

app.get("*" ,(req,res)=>{
    res.render("404error" ,{
        errorMsg: "Please Visit the Valid  Urls ???? "
    });
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})