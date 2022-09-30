import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import cors from 'cors';

const PORT = process.env.PORT || 5005;

const main = async () => {
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use(
		'/graphql',
		graphqlHTTP({
			schema,
			graphiql: true,
		})
	);
	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT} 🚀🌎`);
	});
};

main().catch((error) => {
	console.log(error);
});
