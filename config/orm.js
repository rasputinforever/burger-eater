const connection = require('./connection.js');

const tableName = "burgers";

const orm = {
    selectAll: function(callback) {
        const queryText = `SELECT * FROM ${tableName}`;

        connection.query(queryText, function(err, result) {
            callback(result);
    });
  },

    insertOne: function(burgName, callback) {
        const queryText = `INSERT INTO ${tableName} (burger_name, devoured)
        VALUES (??, FALSE);`;

        connection.query(queryText, [burgName], function(err, result) {
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
