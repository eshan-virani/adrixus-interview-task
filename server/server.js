const express = require("express");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Graphql/schema");
const jwt = require("jsonwebtoken");
require('dotenv').config()

require("./config/mongoConnection");

app.use(express.json());
app.use(cors());

app.use(
  "/",
  graphqlHTTP((req) => {
    const { auth } = req.headers;
    if (auth) {
      var { user_id } = jwt.verify(auth, process.env.jwtSecretKey);
    }

    return {
      schema,
      context: {
        user_id,
      },
      graphiql: {
        headerEditorEnabled: true,
      },
    };
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server will bw running at ${process.env.PORT}`);
});
