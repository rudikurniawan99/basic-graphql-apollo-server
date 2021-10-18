const { users } = require('../dummy-data/dummy')
const { v4: uuidv4 } = require('uuid')

const resolvers = {
  Query: {
    users: () => users 
  },
  Mutation: {
    createUser: (parent, args) => {
      const { name, username, email, photoProfile } = args.input
      const user = {
        id: uuidv4(),
        name,
        username,
        email,
        photoProfile
      }

      users.push(user)
      console.log(users)
      return user
    }
  }
}

module.exports = { resolvers }