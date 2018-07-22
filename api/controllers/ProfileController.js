/**
 * ProfileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  async addUser(req,res){

        var requestData = req.body;
        var object ={
            name:requestData.name,
            email:requestData.email,
            phone:requestData.phone
        }

      await Profile.create(object)
        .fetch()
        .then(function(data){
            return res.ok(data)
        }).catch(function(error){
            return res.badRequest(error)
        })
        console.log('hit')
        //return res.ok(req.body);
    },
   async fetchData(req,res){
        var reqData = req.query;
        await Profile.find(
           {name:reqData.name} 
        )
        .sort('name DESC')
        //.limit(1)
        .then(function(data){
            return res.ok(data)
        }).catch(function(error){
            return res.ok(error)
        })
    }
    

    
};

