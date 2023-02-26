const express = require("express")
const router = express.Router()

const messages = require("./messages");
router.get("/", (req,res,next) => {
    res.render('new', {title: "Create new message"});
})

router.post("/", (req,res,next) => {
    messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
    res.redirect("/");
})

module.exports = router;