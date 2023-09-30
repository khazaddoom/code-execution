const { exec } = require("child_process");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post('/run', (req, res) => {
    const code = req.body.code;
    const input = req.body.input;
    
    // Run code in the compiler container
    exec(`echo "${code}" | docker exec -i my-compiler-container /bin/bash run.sh`, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(stderr);
        } else {
            res.status(200).send(stdout);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});