var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	question: {
		type: String,
		trim: true,
		required: [true, "To create a poll you must include a question."],
		minlength: [8, "Your poll question must be at least 8 characters"]
	},
	option1: {
		type:String,
		trim: true,
		required: [true, "To create a poll you must include option 1."],
		minlength:[3, "Your poll option 1 must be at least 3 characters"]
	},
	value1: {
		type:Number
	},
	option2: {
		type:String,
		trim: true,
		required: [true, "To create a poll you must include option 2."],
		minlength:[3, "Your poll option 2 must be at least 3 characters"]
	},
	value2: {
		type:Number
	},
	option3: {
		type:String,
		trim: true,
		required: [true, "To create a poll you must include option 3."],
		minlength:[3, "Your poll option 3 must be at least 3 characters"]
	},
	value3: {
		type:Number
	},
	option4: {
		type:String,
		trim: true,
		required: [true, "To create a poll you must include option 4."],
		minlength:[3, "Your poll option 4 must be at least 3 characters"]
	},
	value4: {
		type:Number
	}
}, {timestamps: true})

var Poll = mongoose.model('Poll', PollSchema)