import React from "react"
import ReactDOM from "react-dom"
import { InMemoryCache } from "apollo-boost"
import ApolloClient from 'apollo-client'
import { ApolloProvider } from "react-apollo"
import { BatchHttpLink } from 'apollo-link-batch-http'
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";

import Hello from './hello'
import Dog from './dog'
import Cat from './cat'
import Sloth from './sloth'
import Path from './components/path'

import css from "./index.css";

const uri = "http://localhost:4001/graphql"

const batchHttpLink = new BatchHttpLink({ uri, headers: { batch: "true " }, batchInterval: 30 })
const httpLink = new HttpLink({ uri });

const client = new ApolloClient({
  // the link to use is a either the default or batch link
  link: split(
    operation => operation.getContext().important === true,
    httpLink, // if the test is true -- debatch
    batchHttpLink // otherwise, batching is fine
  ),
  cache: new InMemoryCache()
});

const Index = () => {
  return <div className={css.app}>
    <Hello />
    <Dog />
    <Cat />
    <Sloth />
    <Path id={2} />
  </div>;
};

ReactDOM.render(<ApolloProvider client={client}><Index /></ApolloProvider>, document.getElementById("app"));
