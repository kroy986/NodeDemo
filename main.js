let express=require('express');
let port=8000;
let routes = require('./controller/userController');
let router  = express.Router();
let app=express();
let bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json--------------
app.use(bodyParser.json())

routes.app(app);

app.listen(process.env.PORT || port,function(req,res,next){
  console.log("Server is Running on ");
});
