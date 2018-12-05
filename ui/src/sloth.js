import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Sloth = () => (
  <Query
    query={gql`
      query {
        sloth
      }
    `}
    context={{ important: true }}
  >
    {
      ({ loading, error, data: { sloth } }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        return <marquee scrollamount="20"><i>{sloth}</i></marquee>
      }
    }
  </Query>
)

export default Sloth