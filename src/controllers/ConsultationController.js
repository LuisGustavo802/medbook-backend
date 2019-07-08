const Consultation = require('../models/Consultation');

class ConsultationController {

    async store(req, res) {
        const consultation = await Consultation.create(req.body);
        
        return res.send(consultation);
    }

    async show(req, res) {
        const consultation = await Consultation.findById(req.params.id).populate();

        return res.json(consultation);
    }
}

module.exports = new ConsultationController();