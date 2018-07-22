/**
 * UserRollController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    async getUserRole(req,res){
        var reqData = req.query

        await UserRoll.find(
            {role:reqData.role}
        )
        .populate('profileId')
        .then(
            function(data){
                return res.ok(data)
            }
        )
        .catch(function(error){
                return res.badRequest(error);
            }
        )
    },
    async addUserRoll(req,res){
        var userReq = req.body

        var object = {
            profileId: userReq.proId,
            role: userReq.role,
            status: userReq.status
        }
        await UserRoll
        .create(object)
        .fetch()
        .then(function(data){
            return res.ok(data)
        })
        .catch(function(error){
            return res.badRequest(error)
        })
    }
};

