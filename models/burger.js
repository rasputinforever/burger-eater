const orm = require("../config/orm.js");

// see ORM for all the corresponding info about these. Model is an in-between.
const burger = {
  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },

  insertOne: function(burgName, callback) {
    console.log("Hello from MODEL")
    orm.insertOne(burgName, function(res) {
      callback(res);
    });
  },
  
  updateOne: function(devBool, burgID, callback) {
    orm.updateOne(devBool, burgID, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;