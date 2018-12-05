import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Dog = () => (
  <Query
    query={gql`
      query {
        dog
      }
    `}
  >
    {
      ({ loading, error, data: { dog: name } }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        return <div>{ `${name} has a dog.`}</div>
      }
    }
  </Query>
)

export default Dog