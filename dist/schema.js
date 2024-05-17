export const typeDefs = `#graphql
  type Roof {
    id: ID!
    type: String!
    material: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    contractor: Contractor!
    roof: Roof!
  }
  type Contractor {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    roofs: [Roof]
    roof(id: ID!): Roof
    reviews: [Review]
    review(id: ID!): Review
    contractors: [Contractor]
    contractor(id: ID!): Contractor
  }
`;
