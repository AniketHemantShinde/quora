const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/petShop');
mongoose.connection.on('error',function(){
    console.log('error in mongo connection');
})
mongoose.connection.on('open',function(){
    console.log('connected to mongo');
})



const userController = require('./controllers/user');
const questionController = require('./controllers/question');




const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))

app.get('/',function(req,res){
    res.send('Hello World');
});




app.get('/api/v1/users', userController.getAllUsers)
app.post('/api/v1/users', userController.postNewUsers)
app.put('/api/v1/users/:id', userController.updateUsersById)
app.delete('/api/v1/users/:id', userController.delUsersById)

app.get('/api/v1/questions', questionController.getAllQuestions)
app.post('/api/v1/questions', questionController.postNewQuestions)
app.put('/api/v1/questions/:id',questionController.updateQuestionById)
app.delete('/api/v1/questions/:id', questionController.delQuestionById)


app.set('port',3000);
app.listen(app.get('port'),function(){
    console.log('the server is working');
})