const express = require("express")
const fs = require('fs');
const path = require('path');

const {createHandler} = require("graphql-http/lib/use/express")
const {buildSchema} = require("graphql")
const {ruruHTML} = require("ruru/server")

const root = require('./root');

const PORT = process.env.PORT || 3000;

const schema = buildSchema(fs.readFileSync(path.join(__dirname, './schema.graphql')).toString())

const app = express()

app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
)

app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({endpoint: "/graphql"}))
})

// Start the server at port
app.listen(PORT)
console.log(`Running a GraphQL API server at http://localhost:${PORT}`)