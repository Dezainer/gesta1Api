import * as MonthController from './controllers/monthController';
import * as RecordController from './controllers/recordController';

export default (app) => {

	//Get Month Data
	app.route('/:month')
		.get(MonthController.getMonth)

	//Create Record
	app.route('/:month/:type/record')
		.post(RecordController.createRecord)
	
	//Delete Record
	app.route('/:month/:type/:id')
		.delete(RecordController.removeRecord)
}