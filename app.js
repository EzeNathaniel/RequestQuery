require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const cors = require('cors')
const notFoundRoute = require('./middleware/notFoundRoute')

const teamRouter = require('./routes/teamRouter');
app.use(teamRouter)

app.use (cors())
app.use(express.json());
app.use(notFoundRoute)

//error route
app.use((req, res)=>{
    res.status(404).send("Route does not exit")
});

const startserver = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`server running on ${PORT}`);
    })
}catch
    (error){
        console.log(error);
    };
}

startserver();