
const express = require('express')
const articleRouter = require("./routes/articles")
const Article = require('./models/article')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3700;
mongoose.connect(process.env.URL)
    .then(() => {
        console.log("Mongodb Connected");
    })
    .catch((error) => {
        console.log(`${error}`);
    })

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async(req, res) => {
    const articles =await Article.find().sort({ createdAt:'desc'})
    res.render('articles/bharat', { articles: articles })
})

app.use('/articles', articleRouter)
app.listen(port, () => {

    console.log(`server Running At ${port}`);
})
