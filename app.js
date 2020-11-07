const Sequelize = require('sequelize'); //require the sequelize module

const sequelize = new Sequelize({ //Instantiate Sequelize 
    dialect: 'sqlite',
    storage: 'movies.db'
}); 
   