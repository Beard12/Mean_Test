var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "Your name is required"],
		maxlength: [20, "Your name cannot be longer than 20 characters"],
		validate: {
			validator: function(name){
				return /^[a-z0-9]+$/i.test(name)
			},
			message: "Your username can only contain alphanumeric characters"
		}
	},
	_polls:[{type: Schema.Types.ObjectId, ref :'Poll'}]

},{timestamps:true})

var User = mongoose.model('User', UserSchema)

