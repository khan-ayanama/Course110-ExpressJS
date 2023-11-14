const express = require('express');
const homeRouter = require('./Router/home.router');

const app = express()

app.use('/',homeRouter);

app.listen(3000,()=>{
    console.log('Server running at 3000...')
})