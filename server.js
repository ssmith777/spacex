const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const app = express();
const path = require('path');

const expressPlayground = require('graphql-playground-middleware-express')
  .default;

const cors = require('cors');
// Allow cross-origin
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
