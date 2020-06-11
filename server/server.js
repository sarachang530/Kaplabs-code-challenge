const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Route
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
})


//redirects any unknown routes to a 404 status
app.use('*', (req, res) =>{
    return res.status(404);
});


app.use((err, req, res, next) => {
    const defaultErr = {
        log: "An global error has occured",
        status: 400,
        err: { err: 'An error has occured in the server'}
    };
    Object.assign(defaultErr, err);
    return res.status(defaultErr.status).json(defaultErr);
});

// Check if connected logic
app.listen(PORT, () => {
    console.log(`You are now connected to Port: ${PORT}`);
})


module.exports = app;