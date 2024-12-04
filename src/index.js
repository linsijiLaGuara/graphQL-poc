import { createYoga } from 'graphql-yoga';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

const server = createYoga({
  schema: {
    typeDefs,
    resolvers,
  },
});

server.start({ port: 3000 })
  .then(({ port }) => {
    console.log(` Server ready at http://localhost:${port}`)
  })
  .catch((err) => {
    console.error('Error starting server:', err)
  })