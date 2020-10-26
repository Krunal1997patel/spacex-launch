const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
	GraphQLSchema,
} = require('graphql');
const axios = require('axios');
const { response } = require('express');

//lauch type data
const Launchtype = new GraphQLObjectType({
	name: 'Launch',
	fields: () => ({
		flight_number: { type: GraphQLInt },
		mission_name: { type: GraphQLString },
		launch_year: { type: GraphQLString },
		launch_date_local: { type: GraphQLString },
		launch_success: { type: GraphQLBoolean },
		rocket: { type: RocketType },
	}),
});

//rockrt type data

const RocketType = new GraphQLObjectType({
	name: 'Rocket',
	fields: () => ({
		rocket_id: { type: GraphQLString },
		rocket_name: { type: GraphQLString },
		rocket_type: { type: GraphQLString },
	}),
});

//root query

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: () => ({
		launches: {
			type: new GraphQLList(Launchtype),
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/launches`)
					.then((response) => {
						return response.data;
					});
			},
		},
		launch: {
			type: Launchtype,
			args: {
				flight_number: { type: GraphQLInt },
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
					.then((response) => response.data);
			},
		},
		rockets: {
			type: new GraphQLList(RocketType),
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/rockets`)
					.then((response) => {
						return response.data;
					});
			},
		},
		rocket: {
			type: RocketType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
					.then((response) => response.data);
			},
		},
	}),
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
