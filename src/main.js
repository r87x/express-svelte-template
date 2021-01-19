const express = require('express');
const app = express();
const port = 8000;

app.get('/', (_,res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})