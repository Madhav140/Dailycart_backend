const mongoose = require('mongoose')

const connectString = process.env.CONNECTION_STRING

mongoose.connect(connectString).then((res)=>{
    console.log('MongoDB connected Successfully');
}).catch((err)=>{
    console.log(err);
})