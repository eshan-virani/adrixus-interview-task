const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;

// query type define for return user-details
const usersdata = new GraphQLObjectType({
  name: "userdata",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
    phone: { type: GraphQLString },
    registered: { type: GraphQLString },
  }),
});

// query type define for return token of auth
const token = new GraphQLObjectType({
  name: "token",
  fields: {
    authtoken: { type: GraphQLString },
    user: { type: usersdata },
  },
});
module.exports = { usersdata, token };
