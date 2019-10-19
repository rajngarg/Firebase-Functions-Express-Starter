import posts from './router/posts'
import users from './router/users'

import functions = require("firebase-functions");
import express = require('express');

//Here declare separate express instances for your Endpoints
const postsApp = express();
const usersApp = express();

//Make router files, import them and use them
postsApp.use('/', posts);
usersApp.use('/', users);

//Here you declare the function
const postsFunc = functions.region('asia-east2').https.onRequest(postsApp);
const usersFunc = functions.region('asia-east2').https.onRequest(usersApp);

//Here are the functions {'endpoint':'function'}
module.exports = {
    posts: postsFunc,
    users: usersFunc
};