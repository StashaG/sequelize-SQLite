//Create a Sequelize instance
const Sequelize = require('sequelize'); //require the sequelize module

const sequelize = new Sequelize({ //Instantiate Sequelize 
    dialect: 'sqlite',
    storage: 'movies.db'
}); 
   
//Test the Connection

// async IIFE
(async () => { //Define the async function
    try {
        await sequelize.authenticate(); //Test the connection
        console.log( 'Connection to the database successful!' );
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();