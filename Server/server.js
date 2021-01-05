const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path =  require('path');



app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//configuartion,1st sends build file from server too browser,2nd one sends static file from server too browser
app.use(express.static(path.join(__dirname,'../build')))
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const ConnectionString = "mongodb+srv://admin:root@cluster0.3yo9l.mongodb.net/menu?retryWrites=true&w=majority"
mongoose.connect(ConnectionString,{useNewUrlParser: true})

const Schema = mongoose.Schema

var menuSchema = new Schema({
    foodName:String,
    price:Number,
    foodPicture:String
});

var menuModel = mongoose.model("menu", menuSchema)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('./api/menu',(req,res)=>{

    menuModel.create({
        FoodName:req.body.foodName,
        Price:req.body.price,
        FoodPicture:req.poster

    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})