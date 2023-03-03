const express = require('express')
const loginRouter = express.Router();


loginRouter.get("/cookie/get", (req, res) => {
    const accessToken = req.cookies.accessToken;
    const userName = req.cookies.currentUser;

    var response = {
        accessToken: accessToken,
        userName: userName
    }
    console.log(req.cookies);

    res.json(response)

})


loginRouter.get("/cookie/set", (req, res) => {
    res.cookie('accessToken', "accessToken", {maxAge: 100 * 60 * 60 * 1000, httpOnly: true})
    res.cookie('currentUser', "davey", {maxAge: 100 * 60 * 60 * 1000, httpOnly: true})

    var response = {
        accessToken: "accessToken",
        userName: "davey",
        outcome: "Set these two cookies!"
    }

    res.json(response)
})

module.exports = loginRouter;