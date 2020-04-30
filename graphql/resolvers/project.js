const Project = require("../../models/project");
const { dataToString } = require("../../helpers/date");

module.exports = {
  projects: () => {
    return Project.find()
      .populate("projectowner")
      .then((projects) => {
        console.log(projects);
        return projects.map((project) => {
          return {
            ...project._doc,
            _id: project.id,
            createdAt: dataToString(project._doc.createdAt),
            updatedAt: dataToString(project._doc.updatedAt),
          };
        });
      })
      .catch((err) => {
        throw err;
      });
  },

  createProject: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("You don't have authorization key");
    }
    const project = new Project({
      projectType: args.projectregister.projectType,
      status: args.projectregister.status,
      payment: args.projectregister.payment,
      currentpay: args.projectregister.currentpay,
      outstandingpay: args.projectregister.outstandingpay,
      agent: "5e9305a58ce9d94d0a277d02",
      projectowner: "5e93109fe9edf655bb3ad13d",
    });
    let createdProject;

    try {
      const result = await project.save();
      createdProject = {
        ...result._doc,
        _id: result._doc._id.toString(),
        createdAt: dataToString(result._doc.createdAt),
        updatedAt: dataToString(result._doc.updatedAt),
      };
      const projectowner = await User.findById("5e93109fe9edf655bb3ad13d");
      if (!projectowner) {
        throw new Error("User not found.");
      }
      projectowner.createdProjects.push(project);
      await projectowner.save();
      return createdProject;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
