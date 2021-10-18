const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    photoProfile: String 
  }

  input CreateUserInput {
    name: String!
    username: String!
    email: String!
    photoProfile: String
  }

  type Mutation {
    createUser(input: CreateUserInput): User
  }

  type Query {
    users: [User]
  }
`

module.exports = { typeDefs }