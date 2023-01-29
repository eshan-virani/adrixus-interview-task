const graphql = require("graphql");
const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLInt,
} = graphql;

//mutation for add with input type
const signup = new GraphQLInputObjectType({
  name: "signup",
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const signin = new GraphQLInputObjectType({
  name: "signin",
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const filter = new GraphQLInputObjectType({
  name: "Filter",
  fields: {
    ageSort: { type: GraphQLBoolean },
    dateSort: { type: GraphQLBoolean },
    email: { type: GraphQLString },
    limit: { type: GraphQLInt }
  },
});

module.exports = { signup, signin, filter };
