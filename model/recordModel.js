import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var RecordSchema = new Schema({
	date: Number,
	desc: String,
	estimated: Number,
	realized: { type: Number, default: 0}
})

var Record = mongoose.model('Record', RecordSchema);

export { RecordSchema, Record };