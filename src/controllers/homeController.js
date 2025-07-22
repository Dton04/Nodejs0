const { get } = require("../routes/web");

const getHome = (req, res) => {
   res.send('Hello World anh em!');
}

const getCheck = (req, res) => {
   res.render('ex.ejs');
}

module.exports = {
   getHome, getCheck
}