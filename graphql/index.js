const { ApolloServer, gql } = require('apollo-server')
const faker = require('faker')

const typeDefs = gql`
  type Content {
    thumbnail: String!
    title: String!
    id: ID!
    slug: String!
  }

  type PathLevel {
    title: String!
    id: ID!
    content: [Content!]!
  }

  type Path {
    title: String!
    id: ID!
    pathLevels: [PathLevel!]!
  }

  type Query {
    test: String!
    dog: String!
    cat: Int!
    sloth: String!

    path: Path!
  }
`

const waiter = (interval) => new Promise((resolve) => {
  setTimeout(resolve, interval)
})

const makeContent = () => ({
  thumbnail: faker.image.avatar(),
  title: faker.company.bsNoun(),
  id: faker.random.uuid(),
  slug: faker.lorem.slug()
})

const makePathLevel = () => ({
  title: faker.commerce.product,
  id: faker.random.uuid(),
  content: [ 
    makeContent(),
    makeContent(),
    makeContent(),
    makeContent(),
    makeContent(),
  ]
})

const resolvers = {
  Query: {
    test: faker.commerce.department,
    dog: faker.name.firstName,
    cat: () => faker.random.number({ min: 1, max: 7 }),
    sloth: async () => {
      await waiter(6000)
      return faker.company.catchPhrase()
    },
    path: async () => {
      return {
        id: faker.random.uuid(),
        title: faker.commerce.productName,
        pathLevels: [
          makePathLevel(),
          makePathLevel(),
          makePathLevel(),
        ]
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log("Server listening at", url)
})