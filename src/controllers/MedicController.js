const Medic = require('../models/Medic');

class MedicController {
    async store(req, res) {
        const medic = await Medic.create(req.body);
        
        return res.send(medic);
    }

    async show(req, res) {
        const medic = await Medic.find({user: req.params.id});

        return res.json(medic);
    }
}

module.exports = new MedicController();