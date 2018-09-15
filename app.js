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
const answerController = require('./controllers/answer');
const statController = require('./controllers/stat');
const blogController = require('./controllers/blog') ;
const pageController = require('./controllers/page');




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

app.get('/api/v1/answers',answerController.getAllAnswers)
app.post('/api/v1/answers', answerController.postNewAnswer)
app.put('/api/v1/answers/:id', answerController.updateAnswerById)
app.delete('/api/v1/answers/:id', answerController.delAnswerById)

app.get('/api/v1/stats',statController.getAllStats)
app.post('/api/v1/stats', statController.postNewStat)
app.put('/api/v1/stats/:id', statController.updateStatById)
app.delete('/api/v1/stats/:id', statController.delStatById)

app.get('/api/v1/blogs',blogController.getAllBlogs)
app.post('/api/v1/blogs', blogController.postNewBlogs)
app.put('/api/v1/blogs/:id', blogController.updateBlogsById)
app.delete('/api/v1/blogs/:id', blogController.delBlogsById)

app.get('/api/v1/pages',pageController.getAllPages)
app.post('/api/v1/pages', pageController.postNewPages)
app.put('/api/v1/pages/:id', pageController.updatePagesById)
app.delete('/api/v1/pages/:id', pageController.delPagesById)


app.set('port',3000);
app.listen(app.get('port'),function(){
    console.log('the server is working');
})
module.exports = app;