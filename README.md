# jaxl
# Setup Instructions
## Getting started
1.to begin with we need node.js installed on your system along with any of your preferable editor like Vscode or sublime or any other.\
2.After that check our node version by writing `node -v` command into your command prompt.\

## npm-init
`npm init` will be initialized app with package.json file, so let’s install all the dependencies and packages needed for the development of this project.\
packages needed for the development of this project are below :-
* npm i express 
* npm i body-parser 
* npm i express-handlebars 
* npm i nodemon

# Dependency Mangaement

* `express`- Allows you to define routes of your application based on HTTP methods and URLs
*  `body-parser`-It is used to handle HTTP post requests and extract the entire body portion of an incoming request stream and exposes it on req.body.
*  `express-handlebars` - It is one of the most used templating engines for web applications, here I am using this you can use any like  hbs, ejs etc.
*  `nodemon` - it led to automatically restarting of our node application when any changes occur in our app.
# How to Start App :-
after installing all these dependencies our package.json file will have the name of all these dependencies.\
`app.js` is our main app file.\
`views` folder will contains our templates .\
1.`contact.hbs` consist main form that we will be using for filling out the user details.\
2.`otp.handlebars` will contain otp form used for verifying form (Here we are using .handlebars extension as express-handlebars is our templating engine.) .\
3.`public ` folder will contain css files for styling of the app.\
* let’s start coding in our app.js file and start a basic server.\
The app is listening at port 8000.\
for starting the server just pass the below command in your app terminal .\

`nodemon app.js`
