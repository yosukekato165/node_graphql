const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
    name: String
  }
`);

const root = {
  hello: () => {
    return "Hello world!";
  },
  name: () => {
    return "John";
  },
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3000);
console.log("Running a GraphQL API server at http://localhost:3000/graphql");
