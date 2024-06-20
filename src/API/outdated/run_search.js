const { exec } = require('child_process');

function runSearchScript(query, callback) {
    exec(`python example_search.py "${query}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        callback(JSON.parse(stdout));
    });
}

module.exports = runSearchScript;
