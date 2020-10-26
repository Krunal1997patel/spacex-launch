const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const server = express();

server.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
