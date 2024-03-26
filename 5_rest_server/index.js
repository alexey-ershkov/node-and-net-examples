const express = require('express');
const router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});