/**
 * UserRoll.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   profileId:{model:'Profile'},
   role:{type:"string"},
   status:{type:"number"}

  },

};

