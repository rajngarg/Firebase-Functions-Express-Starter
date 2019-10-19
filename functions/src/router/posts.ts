import express = require('express');

const postsRouter = express();

postsRouter.get("/", (request: any, response: any) => {
    response.send("Here you get your posts")
});

export default postsRouter