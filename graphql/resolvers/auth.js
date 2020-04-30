const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

module.exports = {
  users: () => {
    return User.find()
      .then((users) => {
        return users.map((user) => {
          return { ...user._doc };
        });
      })
      .catch((err) => {
        throw err;
      });
  },

  registerUser: (args) => {
    return User.findOne({ email: args.register.email })
      .then((user) => {
        if (user) {
          throw new Error("User already exist");
        }
        return bcrypt.hash(args.register.password, 12);
      })
      .then((hashedPassword) => {
        const user = new User({
          firstname: args.register.firstname,
          lastname: args.register.lastname,
          email: args.register.email,
          password: hashedPassword,
        });
        return user
          .save()
          .then((result) => {
            console.log(result);
            return { ...result._doc };
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  },

  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "somesupersecretkey",
      {
        expiresIn: "1hr",
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  },
};
