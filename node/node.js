const express = require("express");
const cors = require("cors");
const app = express();

let users = [{login: 'login', password: 'password'}];

app.use(cors());
app.get("/addUser", function(request, response){
    let login = request.query.login;
    let password = request.query.password;

    let msg = "";

    if (!login || !password)
    {
        msg = "Nulls";
    }
    else if (users.filter((i) => i.login == login).length > 0)
    {
        msg = "This login is already in array";
    }
    else
    {
        users.push({login: login, password: password});
        msg = "User added";
    }

    response.send({result: msg});
});

app.get("/getLogins", function(request, response)
{
    response.send(users.map(i => i.login));
});

app.listen(3333);