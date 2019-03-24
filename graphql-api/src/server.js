const express = require( 'express' );
const { weaveSchemas } = require( 'graphql-weaver' );
const express_graphql = require( 'express-graphql' );
const cors = require( 'cors' );

const orderServiceUrl = process.env.ORDER_SERVICE_URL || 'http://localhost:8101/graphql';
const vehicleServiceUrl = process.env.VEHICLE_SERVICE_URL || 'http://localhost:8102/graphql';

console.log('orderServiceUrl: ', orderServiceUrl);
console.log('vehicleServiceUrl: ', vehicleServiceUrl);


const getGraphQLSchema = async () => {
	return await weaveSchemas( {
		endpoints: [
			{
				namespace: 'vehicles',
				typePrefix: 'Vehicles_',
				url: vehicleServiceUrl
			},
			{
				namespace: 'orders',
				typePrefix: 'Orders_',
				url: orderServiceUrl
			}
		]
	} );
};

// Create an express server and a GraphQL endpoint
const app = express();

// Allow CORS
app.use( cors() );

app.use( '/graphql', express_graphql( async () => ({
	schema: await getGraphQLSchema(),
	graphiql: true
}) ) );


app.listen( 4000, () => console.log( 'Express GraphQL Server Now Running On localhost:4000/graphql' ) );
