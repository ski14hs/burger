var orm = require ("../config/orm.js")

//Call ORM functions using burger spcecific input for the ORM
var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    //insertOne
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    //updateOne()
    update: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;