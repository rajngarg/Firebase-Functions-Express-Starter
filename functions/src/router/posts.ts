import express = require('express');

const posts = express();

//You can create as many methods as you want for POST, GET, PUT etc.

posts.get("/", (request: any, response: any) => {
    response.send("Here you get your posts")
});


export default posts