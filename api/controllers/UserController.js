/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var UserController = {

	new: function(req,res){
		//console.log(req.session);
		res.redirect('/');
	},
	// get: function(req,res){
	// 	userId=req.params.id;
	// 	console.log(req.params);
	// 	console.log(req.param('id'));
	// 	user=User.find({id:userId}).exec(function(err,found) {
	// 	if(found.length) {
	// 			res.json(user);
	// 		}
	// 		res.json({txt:"No data foubd"});
	// 	});
	// }

};
module.exports = UserController;
