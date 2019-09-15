[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)&nbsp;&nbsp; [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://graphql-spacex-app.herokuapp.com/)

# SpaceX App

### This App is built with React on the frontend & NodeJS, GraphQL and Express on the backend.

---

##### Note: This site may be slow loading, please allow a little time for the container to spin up.

### view site @: https://graphql-spacex-app.herokuapp.com

### view GraphQL API with GraphQL Playground @: https://graphql-spacex-app.herokuapp.com/playground

### view GraphQL API with GraphiQL @: https://graphql-spacex-app.herokuapp.com/graphql

---

##### Example GraphQL Query:

```
query{
  launches{
    flight_number
    mission_name
    launch_year
    launch_success
    rocket{
      rocket_id
      rocket_name
      rocket_type
    }
  }
}
```

##### GraghQL Playground https://graphql-spacex-app.herokuapp.com/playground

![Demo](https://github.com/ssmith777/spacex/blob/master/client/src/GraphQL-Playground.png?raw=true)

##### GraphiQL Page https://graphql-spacex-app.herokuapp.com/graphql

![Demo](https://github.com/ssmith777/spacex/blob/master/client/src/spacex-graphql.png?raw=true)

##### Client Pages https://graphql-spacex-app.herokuapp.com/

![Demo](https://raw.githubusercontent.com/ssmith777/spacex/master/client/src/client-img.png)

##### Mission details https://graphql-spacex-app.herokuapp.com/launch/21

![Demo](https://github.com/ssmith777/spacex/blob/master/client/src/client-detail-page.png?raw=true)

---

Note: Built with...

- @apollo/react-hooks: https://www.npmjs.com/package/@apollo/react-hooks
- apollo-boost: https://www.npmjs.com/package/apollo-boost
- graphql: https://www.npmjs.com/package/graphql
- moment: https://www.npmjs.com/package/moment
- @apollographql/graphql-playground-middleware-express https://www.npmjs.com/package/@apollographql/graphql-playground-middleware-express
