const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
import jwt from "jsonwebtoken";
import { rule, shield, and, or, not } from "graphql-shield";
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");

dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function getClaims(req) {
  let token;
  try {
    token = jwt.verify(req.request.headers.authorization, "MY_TOKEN_SECRET");
  } catch (e) {
    return null;
  }
  console.log(token);
  return token;
}

// Rules
const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return ctx.claims !== null;
});
const canAddUser = rule()(async (parent, args, ctx, info) => {
  return ctx.claims.role === "admin";
});

// Permissions
const permissions = shield({
  Query: {
    users: and(isAuthenticated),
  },
  Mutation: {
    addUser: and(isAuthenticated, canAddUser),
  },
});

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [permissions],
  context: (req) => ({
    claims: getClaims(req),
  }),
});

server.start({ port: 4000 }, () =>
  console.log("Server is running on http://localhost:4000")
);
