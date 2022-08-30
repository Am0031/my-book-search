const express = require("express");
const path = require("path");
//adding imports for apollo server (and removed routes)
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const context = require("./context");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

//creating apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

//making express middleware for apollo server
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

//express is now called as middleware of apollo server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
