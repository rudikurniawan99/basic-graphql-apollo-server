const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/typedef')
const { resolvers } = require('./schema/resolver')

const server = new ApolloServer({ typeDefs, resolvers })


server.listen().then(({url}) => {
  console.log(`success to run at ${url}`)
})