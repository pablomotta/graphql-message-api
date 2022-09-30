import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql'

export const MessageType = new GraphQLObjectType({
    name: "Message",
    fields: () => ({
        id: {type: GraphQLInt},
        message: {type: GraphQLString},
        mentions: {type: new GraphQLList(GraphQLString) },
        emoticons: {type: new GraphQLList(GraphQLString) },
        links: {type: new GraphQLList(GraphQLString) }
    })
})