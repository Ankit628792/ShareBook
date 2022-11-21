const mongoose = require('mongoose')

const DB = process.env.DATABASE_KEY ;
mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongodb Atlas Connected Successfully !')
}).catch((e) => {
    console.log(e)
})