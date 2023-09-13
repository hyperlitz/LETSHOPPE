const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // Import your Sequelize connection configuration

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => { // Adjust force as needed
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});