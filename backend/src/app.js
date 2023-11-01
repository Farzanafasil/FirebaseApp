const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
require('dotenv').config();
require('./DB/connection')
// const protectedRoutes = require('./routes/protectedRoutes');

const PORT=3000


// const user=require('./routes/userRoute')
// app.use('/api',user)
// const posts=require('./routes/postRoute')
// app.use('/api',posts)
const userRoutes = require('./routes/userRoute');
const postRoutes = require('./routes/postRoute');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(PORT,()=>{
    console.log(`port connected to${PORT}`)

})


