const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

app.use('/', require('./routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});