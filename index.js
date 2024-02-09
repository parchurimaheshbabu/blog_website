// const express = require("express");
// const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
// const Article = require('./models/article')
// const dotenv = require("dotenv");
// const path = require('path');
// const methodOverride = require('method-override')
// const articleRouter = require('./routes/articles')
// const app = express();
// const publicDirectoryPath = path.join(__dirname, 'htmlPages');
// app.set('view engine', 'ejs')
// app.use(methodOverride('_method'))
// app.use(express.urlencoded({extended:false}))
// dotenv.config();

// mongoose.connect(process.env.URL)
//     .then(() => {
//         console.log("Mongodb Connected");
//     })
//     .catch((error) => {
//         console.log(`${error}`);
//     })

// app.get('/', async(req, res) => {
//     const articles = await Article.find().sort({createdAt:'desc'})
//     res.render('articles/bharat', { articles: articles })

// })
// app.use('/articles', articleRouter)

// app.use(express.static(publicDirectoryPath, {
//     setHeaders: (res, filePath) => {
//         if (filePath.endsWith('.css')) {
//             res.setHeader('Content-Type', 'text/css');
//         }
//     }
// }));

// dotenv.config();
// const port = process.env.PORT || 3500;

// mongoose.connect(process.env.URL)
//     .then(() => {
//         console.log("Mongodb Connected");
//     })
//     .catch((error) => {
//         console.log(`${error}`);
//     })
// const postschema = new mongoose.Schema({
//     title: String,
//     description: String,
//     content: String

// })
// const Post = mongoose.model("Post", postschema);
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/htmlPages/index.html");
// })

// app.post('/post', async (req, res) => {
//     try {
//         const { title, description, content } = req.body;


//         const PostData = new Post({
//             title, description, content

//         });
//         await PostData.save();
//         res.redirect("/success");
//     }
//     catch (error) {
//         res.redirect("/error");
//     }
// })
// app.get("/success", (req, res) => {
//     res.sendFile(__dirname + "/htmlPages/index.html");
// })
// app.get("/error", (req, res) => {
//     res.sendFile(__dirname + "/htmlPages/Post.html");
// })
// app.listen(port, () => {

//     console.log(`server Running At ${port}`);
// })

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
