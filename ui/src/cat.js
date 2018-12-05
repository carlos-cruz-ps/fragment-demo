import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as R from 'ramda'

const Cat = () => (
  <Query
    query={gql`
      query {
        cat
      }
    `}
    context={{ important: true }}
  >
    {
      ({ loading, error, data: { cat } }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        const makeCats = R.compose(
          R.join(' '),
          R.repeat('😸')
        )

        return <div>{ makeCats(cat) }</div>
      }
    }
  </Query>
)

export default Cat