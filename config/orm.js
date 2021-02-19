const connection = require('./connection.js');

const tableName = "burgers";

const orm = {
  // used when loading page, sends all data to page 
  selectAll: function(callback) {
        const queryText = `SELECT * FROM ${tableName};`;
        connection.query(queryText, function(err, results) {
          
            console.log(results)
            callback(results);
    });
  },
  // used when adding a burger to the DB, it's always FALSE for devoured
  insertOne: function(burgName, callback) {
      const queryText = `INSERT INTO ${tableName} (burger_name, devoured)
      VALUES (${burgName}, FALSE);`;
      connection.query(queryText, function(err, result) {
        console.log(queryText)
          callback(result);
        });
  },

  // UNTESTED: will be used to update a single burger... will need the ID of the burger for best results
    updateOne: function(burgID, callback) {
        const queryText = `UPDATE ${tableName}
        SET devoured = 1
        WHERE id = ${burgID};`;

        connection.query(queryText, function(err, result) {
            callback(result);
    });
  }
};

module.exports = orm;
