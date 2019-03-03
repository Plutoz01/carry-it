const express = require( 'express' );
const { weaveSchemas } = require( 'graphql-weaver' );
const express_graphql = require( 'express-graphql' );

const getGraphQLSchema = async () => {
	return await weaveSchemas( {
		endpoints: [
			{
				namespace: 'vehicle',
				typePrefix: 'Vehicle',
				url: 'http://localhost:8100/graphql' // url to a GraphQL endpoint
			},
			{
				namespace: 'order',
				typePrefix: 'Order',
				url: 'http://localhost:8101/graphql' // url to a GraphQL endpoint
			}
		]
	} );
};

// Create an express server and a GraphQL endpoint
const app = express();

app.use( '/graphql', express_graphql( async () => ({
	schema: await getGraphQLSchema(),
	graphiql: true
}) ) );


app.listen( 4000, () => console.log( 'Express GraphQL Server Now Running On localhost:4000/graphql' ) );
