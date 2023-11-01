const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://farzanaycet2009:FarzanaAtlas@cluster0.addaymv.mongodb.net/NewApp?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to db')

}).catch((error)=>{
    console.log(`${error} connected to dB `)

})