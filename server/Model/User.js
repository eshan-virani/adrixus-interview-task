const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const Userschema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  registered: {
    type: String,
  },
  userType: {
    type: String,
  },
  password: {
    type: String,
  },
});

Userschema.pre("save", function (next) {
  const newUser = this;
  bcrypt.hash(newUser.password, 10, function (err, result) {
    if (err) {
      return next(err);
    } else {
      newUser.password = result;
      next();
    }
  });
});

Userschema.methods.comparePass = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      return cb(err);
    } else {
      return cb(null, match);
    }
  });
};

const User = model("User", Userschema);

module.exports = { User };
