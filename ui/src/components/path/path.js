import React from 'react'
import { Query } from "react-apollo";
import { gql } from 'apollo-boost'

import pathQuery from './path.graphql'
import PathLevel from '../path-level'

const Path = ({ id }) => (
  <Query
    query={gql(pathQuery)}
    context={{ important: true }}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        const { path: { pathLevels, title } } = data

        return <div>
          <h3>{title}</h3>
          <div>
            {pathLevels.map(
              pathLevel => <PathLevel key={pathLevel.id} pathLevel={pathLevel} />
            )}
          </div>
        </div>
      }
    }
  </Query>
)

export default Path