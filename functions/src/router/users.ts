import express = require('express')

const users = express()

users.get("/", (request: any, response: any) => {
    response.send("Here you get your users")
})

export default users