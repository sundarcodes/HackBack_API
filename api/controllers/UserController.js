/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var UserController = {

	new: function(req,res){
		console.log(req.session);
		res.redirect('/');
	},

};
module.exports = UserController;
