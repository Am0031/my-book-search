const { ApolloError } = require("apollo-server");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const signup = async (_, { input }) => {
  const userExists = await User.findOne({ email: input.email });

  if (!userExists) {
    const user = await User.create(input);

    if (!user) {
      return ApolloError("New user could not be created");
    }

    const token = signToken(user);

    return { token, user };
  } else {
    return ApolloError("User already exists!");
  }
};

module.exports = signup;
