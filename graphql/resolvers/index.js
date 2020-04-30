const agentResolve = require("./agent");
const projectResolve = require("./project");
const authResolve = require("./auth");

const rootResolver = {
  ...authResolve,
  ...projectResolve,
  ...agentResolve,
};

module.exports = rootResolver;
