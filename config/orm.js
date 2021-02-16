const connection = require('./connection.js');

const tableName = "burgers";

const orm = {
  // used when loading page, sends all data to page 
  selectAll: function(callback) {
        const queryText = `SELECT * FROM ${tableName};`;
        connection.query(queryText, function(err, results) {
            callback(results);
    });
  },
  // used when adding a burger to the DB, it's always FALSE for devoured
  insertOne: function(burgName, callback) {
      const queryText = `INSERT INTO ${tableName} (burger_name, devoured)
      VALUES (?, FALSE);`;
      connection.query(queryText, [burgName], function(err, result) {
          callback(result);
        });
  },

  // UNTESTED: will be used to update a single burger... will need the ID of the burger for best results
    updateOne: function(devBool, burgID, callback) {
        const queryText = `UPDATE ${tableName}
        SET devoured = ??
        WHERE id = ??;`;

        connection.query(queryText, [devBool, burgID], function(err, result) {
            callback(result);
    });
  }
};

module.exports = orm;
