var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var  Elections = new Schema({
    date    : Date,
    status    : Number,
    description : String
});

var People = new Schema({
    firstName    : String,
    lastName    : String,
    address : String,
    votingActivity : Array
});

var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Elections', Elections );
mongoose.model( 'People', People );
mongoose.model( 'Todo', Todo );
