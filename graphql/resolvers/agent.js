const Agent = require("../../models/agent");

module.exports = {
  agents: () => {
    return Agent.find()
      .populate("getuser")
      .then((agents) => {
        return agents.map((agent) => {
          return { ...agent._doc, _id: agent.id };
        });
      })
      .catch((err) => {
        throw err;
      });
  },
  registerAgent: (args) => {
    debugger
    console.log(args)
    const agent = new Agent({
      business_name: args.agentRegister.business_name,
      business_number: args.agentRegister.business_number,
      marn: args.agentRegister.marn,
      rating: args.agentRegister.rating,
      status: args.agentRegister.status,
      getuser:  args.agentRegister.getuser,
    });
    return agent
      .save()
      .then((result) => {
        console.log(result);
        return { ...result._doc, _id: agent.id };
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
};
