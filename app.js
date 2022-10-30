const express=require('express');
const bodyparser=require('body-parser');

const path=require('path');
const exphbs=require('express-handlebars');

const app=express();
app.engine('handlebars',exphbs({ extname: "hbs", defaultLayout: false, layoutsDir: "views/ "}));
app.set('view engine','handlebars');

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    res.render('contact');
});

var email;
//otp generate
var otp;
otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);
 


app.post('/send',function(req,res){
    email=req.body.email;
          
     var count=30;
     setInterval(function(){
      count--;
      if(count>=0){
        // res.render('otp',{timer:count});
      }  
    
     },1000)


        res.render('otp',{timer:count});
    });

app.post('/verify',function(req,res){

    if(req.body.otp==otp){
        res.status(200).send(`<h3>You has been successfully registered Your Email is </h3><h2> ${email}</h2>`);
    }
    else{
        res.status(400).render('otp',{msg : 'otp is incorrect'});
    }
}); 

 //otp resend
app.post('/resend',function(req,res){
        //  console.log(otp);
         otp = Math.random();
         otp = otp * 1000000;
         otp = parseInt(otp);
         console.log(otp);

        res.status(200).render('otp',{msg:"otp has been sent"});


});


//defining port
const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
})