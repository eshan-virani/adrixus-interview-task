const express = require("express");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Graphql/schema");
const jwt = require("jsonwebtoken");
const PORT = 5000;
const jwtSecretKey = "Demo";

require("./config/mongoConnection");

app.use(express.json());
app.use(cors());

app.use(
  "/",
  graphqlHTTP((req) => {
    const { auth } = req.headers;
    if (auth) {
      var { user_id } = jwt.verify(auth, jwtSecretKey);
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

app.listen(PORT, () => {
  console.log(`Server will bw running at ${PORT}`);
});
