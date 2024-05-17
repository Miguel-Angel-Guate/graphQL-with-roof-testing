import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './libs/schema.js';
import { resolvers } from './libs/roofResolver.js';
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
console.log("🚀 ~ server:", server);
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
