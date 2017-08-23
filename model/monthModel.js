import mongoose from 'mongoose';
import { RecordSchema } from './recordModel';

var Schema = mongoose.Schema;

var MonthSchema = new Schema({
	name: String,
	receitas: [ RecordSchema ],
	despesas: [ RecordSchema ],
	total: {
		accumulated: Number,
		incomming: Number,
		charged: Number,
		month: Number,
		total: Number 
	}
})

var Month = mongoose.model('Month', MonthSchema);

export default Month;