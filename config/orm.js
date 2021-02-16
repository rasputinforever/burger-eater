const connection = require('./connection.js');

const tableName = "burgers";

const orm = {
    selectAll: function(callback) {

        const queryText = `SELECT * FROM ${tableName};`;

        connection.query(queryText, function(err, results) {
          
            callback(results);
    });
  },

    insertOne: function(burgName, callback) {
        const queryText = `INSERT INTO burgers (burger_name, devoured)
        VALUES (?, FALSE);`;
        console.log("Hello from ORM")
        connection.query(queryText, [burgName], function(err, result) {
            console.log(queryText)
            callback(result);
         });
  },

    updateOne: function(devBool, burgName, callback) {
        const queryText = `UPDATE ${tableName}
        SET devoured = ??
        WHERE burger_name = ??;`;

        connection.query(queryText, [devBool, burgName], function(err, result) {
            callback(result);
    });
  }
};

module.exports = orm;
