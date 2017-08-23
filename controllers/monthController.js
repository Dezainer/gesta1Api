import mongoose from 'mongoose';
import Month from '../model/monthModel';

export function getMonth(req, res) {
	Month.find({ name: req.params.month },
		(err, task) => {
			err ? res.send(err)
				: res.json(task)
		}
	)
}