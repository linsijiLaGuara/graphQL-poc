import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

// Crear el esquema GraphQL
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Crear la instancia de Yoga
const yoga = createYoga({
  schema,
});

// Crear el servidor HTTP y pasar Yoga como manejador
const server = createServer(yoga);

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log("🚀 Server ready at http://localhost:3000");
});
