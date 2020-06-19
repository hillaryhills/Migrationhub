const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const isAuth = require("./middleware/isAuth");
const PORT = 4000;
const graphqlSchema = require("./graphql/schema/index");
const graphqlResolvers = require("./graphql/resolvers/index");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-8daqw.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Server runing on',PORT);
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-8daqw.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`);    
    console.log(err);
  });
