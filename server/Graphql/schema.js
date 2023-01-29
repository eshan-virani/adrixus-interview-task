require('dotenv').config()
const graphql = require("graphql");
const { User } = require("../Model/User");
const { signup, signin, filter } = require("./mutation");
const { usersdata, token } = require("./querys");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
} = graphql;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Root Querys
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // Query without arguments
    usersdata: {
      type: new GraphQLList(usersdata),
      args: {
        filters: { type: filter },
      },
      async resolve(parent, { filters }, { user_id }) {
        if (!user_id) throw new Error("user has been unauthorized");
        if (filters) {
          if (filters.ageSort)
            return await User.find({})
              .limit(filters.limit ? filters.limit : 10)
              .sort({ age: 1 }).skip(filters.next)
          if (filters.dateSort)
            return await User.find({})
              .limit(filters.limit ? filters.limit : 10)
              .sort({ registered: 1 }).skip(filters.next)
          if (filters.email)
            return await User.find({ email: email }).limit(
              filters.limit ? filters.limit : 10
            ).skip(filters.next)
        }
        return await User.find({}).limit(filters.limit ? filters.limit : 10).skip(filters.next)
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // new User sign up in mongodb and return jwt token
    SignupUser: {
      type: token,
      args: {
        signupdata: { type: signup },
      },
      async resolve(parent, { signupdata }) {
        const user = await User.findOne({ email: signupdata.email });
        if (user) {
          return new Error("User already exists with that email");
        } else {
          const newUser = await User({
            name: signupdata.name,
            email: signupdata.email,
            password: signupdata.password,
            userType: "Admin",
          }).save();
          const params = {
            user_id: newUser._id,
            email: newUser.email,
          };
          const jwttoken = jwt.sign(params, jwtSecretKey, {
            expiresIn: "24h",
          });
          return { authtoken: jwttoken };
        }
      },
    },
    // new User sign in and return jwt token
    SignIn: {
      type: token,
      args: {
        logindata: { type: signin },
      },
      async resolve(parent, { logindata }) {
        const user = await User.findOne({ email: logindata.email });
        if (!user) {
          throw new Error("User does not exists with this email");
        } else {
          const isMatch = bcrypt.compare(logindata.password, user.password);
          if (isMatch) {
            const params = {
              user_id: user._id,
              email: user.email,
            };
            const jwttoken = jwt.sign(params, process.env.jwtSecretKey, {
              expiresIn: "24h",
            });
            return { authtoken: jwttoken, user: user };
          }
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
