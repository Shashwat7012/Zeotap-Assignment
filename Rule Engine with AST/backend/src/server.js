const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/rules');

const app = express();


connectDB();


app.use(cors()); 
app.use(bodyParser.json()); 

app.use('/api/rules', ruleRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).json({ message: 'Internal Server Error' }); 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
