const express = require('express');
const runSearchScript = require('./run_search');

const app = express();
const PORT = 5001;

app.get('/search', (req, res) => {
    const query = req.query.query;
    runPythonScript(query, (data) => {
        res.json(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
