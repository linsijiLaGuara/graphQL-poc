import { createServer } from "@graphql-yoga/node";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});

server.start({ port: 3000 }).then(({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
