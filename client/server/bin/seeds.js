const mongoose = require('mongoose')
const Course = require('./../models/course.model')
require('dotenv').config();
//DATABASE
// mongoose.connect('mongodb+srv://harounJs:harounJs@cluster0.4cmvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connect(process.env.DB_REMOTE, {
    userNewUrlParser: true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("database tekhdem");
}).catch((err)=>console.log(err))
Course.collection.drop()


const courses = [
    {
        title: 'Angular',
        price: 9.99,
        duration: 6.5
    },
    {
        title: 'React',
        price: 9.39,
        duration: 6.5
    },
    {
        title: 'Bootstrap',
        price: 9.99,
        duration: 10.25
    },
    {
        title: 'Javascript',
        price: 300,
        duration: 8
    },
    {
        title: 'SASS',
        price: 9.99,
        duration: 6.5
    },

]

Course
    .create(courses)
    .then(allCoursesCreated => {
        console.log(`Created ${allCoursesCreated.length} courses`)
        mongoose.connection.close()
    })
    .catch(err => console.log('An error occured', err))