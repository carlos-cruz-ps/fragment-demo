import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Hello = () => (
  <Query
    query={gql`
      query {
        test
      }
    `}
  >
    {
      ({ loading, error, data: { test } }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        return <div>{`Word of the day: ${test}`}</div>
      }
    }
  </Query>
)

export default Hello