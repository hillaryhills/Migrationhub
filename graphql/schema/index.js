const { buildSchema } = require("graphql");

module.exports = buildSchema(`

         type Project {
            _id: ID!
            projectType: String
            status: String
            payment: Boolean
            currentpay: Float
            outstandingpay: Float
            agent: Agent!
            projectowner : User!
            createdAt: String
            updatedAt: String
            
         }

          type User {
              _id: ID!
              firstname: String!
              lastname: String!
              email: String!
              password: String
              createdProjects: [Project!]
              }

         type AuthData {
             userId: ID!
             token: String!
             tokenExpiration: Int!
          }

          type Agent {
               business_name: String!
               business_number: Int!
               marn: Int!
               rating: Int
               status: String
               projectowner: User!
          }

         input UserDetail {
              firstname: String!
              lastname: String!
              email: String!
              password: String!

          }

          input AgentDetail {
               business_name: String
               business_number: Int
               marn: Int
               rating: Int
               status: String
          }

        input ProjectDetail {
            projectType: String!
            status: String!
            payment: Boolean
            currentpay: Float
            outstandingpay: Float
            
        }

      type RootQuery {
          users: [User!]!
          agents: [Agent]
          projects: [Project!]!
          login(email: String!, password: String!): AuthData!
      }


      type RootMutation {
          registerUser(register: UserDetail): User
          registerAgent(agentRegister: AgentDetail): Agent
          createProject(projectregister: ProjectDetail): Project
      }
      schema {
          query:RootQuery
          mutation:RootMutation
      }
    `);
