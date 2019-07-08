const Schedule = require('../models/Schedule');

class ScheduleController {

    async store(req, res) {
        const schedule = await Schedule.create(req.body);
        
        return res.send(schedule);
    }

    async show(req, res) {
        const schedule = await Schedule.find({medic: req.params.id, scheduled:"F"});
        
        return res.json(schedule);
    }

    async update(req, res) {

        await Schedule.updateOne({ _id: req.body.id }, { $set: {scheduled: req.body.scheduled} });

        return res.status(200).send("");
    }
}

module.exports = new ScheduleController();