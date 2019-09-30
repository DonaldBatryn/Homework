const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const User = require("./models/User");
const Post = require("./models/Post");
const schema = require("./schema/schema");

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(
    "/graphql",
    expressGraphQL({
        schema,
        graphiql: true
    })
)

// app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

const router = express.Router();

const createNewUser = router.post("/new", (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            // Throw a 400 error if the email address already exists
            return res
                .status(400)
                .json({ email: "A user has already registered with this address" });
        } else {
            // Otherwise create a new user
            console.log(req.body);
            const newUserObj = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            newUserObj
                .save()
                .then(savedUser => res.json(savedUser))
                .catch(err => console.log(err));
        }
    });
});

app.use("/users", createNewUser);

app.listen(5000, () => console.log('Server is running on port 5000'));