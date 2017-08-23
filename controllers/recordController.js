import mongoose from 'mongoose';
import { Record } from '../model/recordModel';
import Month from '../model/monthModel';
import { summarizeTotal } from '../core/totalSum';

export function createRecord(req, res) {
	let record = new Record({
		date: req.body.date,
		desc: req.body.desc,
		estimated: req.body.estimated,
		realized: req.body.realized
	})

	Month.findOne(
		{ name: req.params.month },
		(err, task) => {
			err && res.json({ message: err })

			task[req.params.type].unshift(record)
			task.total = summarizeTotal(task)

			task.save(err => {
				err ? res.json({ message: err })
					: res.json({ message: 'Register Saved With Success' })
			})
		}
	);
}

export function removeRecord(req, res) {
	Month.findOne(
		{ name: req.params.month },
		(err, task) => {
			err && res.json({ message: err })

			task[req.params.type].splice(
				req.params.id, 1
			)

			task.total = summarizeTotal(task)

			task.save(err => {
				err ? res.json({ message: err })
					: res.json({ message: 'Record Was Deleted With Success' })
			})
		}
	)
}