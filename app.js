const express = require("express");
const mongoose=require('mongoose');

const passport = require("passport")
const passportlocalmongoose=require('passport-local-mongoose');

const session=require('express-session');



const app = express();
  
app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
const PORT = process.env.PORT || 8080;




const u=" mongodb+srv://nikhil:nikhil@cluster0.x3ukh.mongodb.net/<dbname>?retryWrites=true&w=majority";


//database connection established

mongoose.connect(u,{useUnifiedTopology:true,useNewUrlParser:true},function(err){
  if(err){
  console.log(err);
  }
  else{
    console.log("mongodb connected Successfully");
  }
})
///

app.use(session({
  secret:"thisismysecret",
  resave:false,
  saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());



//user schema
const email_newuserschema=new mongoose.Schema({
  email:{
    type:String,
    index:true
  },
  password:String,
  
  name:{
    type:String,
    index:true
  },

});


email_newuserschema.plugin(passportlocalmongoose);



const email_user=mongoose.model('new_form1',email_newuserschema);

passport.use(user2.createStrategy());
passport.serializeUser(user2.serializeUser());      //replace when goole oauth going to used
passport.deserializeUser(user2.deserializeUser());






//user emails details

const email_userschema=new mongoose.Schema({

  email:
  {
    type:String,
    index:true
  },

   email_content:
   {
    type:String,
    index:true
   },
 
  
   sent_to:
   {
    type:String,
    index:true
   },
  
   cc_detail:
    {
      type:String,
      index:true
    },

 
    date_sent:
    {
      type:Date,
      index:true
    },


  
});


const email_user_details=mongoose.model('new_form11',email_userschema);





//saving details when user click on register button


var user_name="Surya"
var password="123"

app.post('/register',function(req,res)
{
  console.log(req.body.username);
user2.register({username:req.body.username,name:req.body.name},req.body.password,function(err){
      if(err){
      console.log(err);
        res.render('register');



        }

  else{
    console.log(err);
      passport.authenticate('local')(req,res,function()
      {
      res.render('login')
    })

  }
})

});
//login-user
app.post('/login',function(req,res)
{

const isuser=new user2({
  username:req.body.username,
  password:req.body.password
})
 req.login(isuser,function(err,result)
    {
      if(err)
      {
    res.render('register');
      }
      else
      {
        passport.authenticate('local')(req,res,function(){
          res.redirect("/business_doc")

        })
      console.log(isuser)  
      }})});






//login with google





//when user click on send mail option  data saved in json and saved in mongodb





//opeing history page
//fetching all the mails from current user and show them on ui accordig to bak date









//opeing homepage 
//fetching all the mails of current user and show them on ui according to future date







//logout option



















//



app.listen(PORT, console.log(`Server started on port ${PORT}`));



//sign up and login operation






//sending mail option
//



 