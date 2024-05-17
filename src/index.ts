import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './libs/schema.js'
import { resolvers } from './libs/roofResolver.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

console.log("🚀 ~ server:", server)
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);


//example  the query pass in the server for test 
/* query ContractorQuery($id: ID!) {
    contractor(id: $id) {
      name
      reviews {
        rating
        content
      }
    }
  } */