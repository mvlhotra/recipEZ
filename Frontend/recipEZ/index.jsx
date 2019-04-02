const { ApolloClient } = require("apollo-boost");
const gql =  require("graphql-tag");

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

client
.query({
  query: gql`
      {
          rates(currency: "USD") {
              currency
          }
      }
  `
})
.then(result => console.log(result));