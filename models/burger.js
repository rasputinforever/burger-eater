const orm = require("../config/orm.js");

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
  
  updateOne: function(devBool, burgName, callback) {
    orm.updateOne(devBool, burgName, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;