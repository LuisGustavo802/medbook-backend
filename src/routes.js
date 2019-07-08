const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const MedicController = require('./controllers/MedicController');
const ScheduleController = require('./controllers/ScheduleController');
const ConsultationController = require('./controllers/ConsultationController');

routes.post("/user", UserController.store);
routes.post("/user/find", UserController.show);

routes.post("/medic", MedicController.store);
routes.get("/medic/find/:id", MedicController.show);

routes.post("/schedule", ScheduleController.store);
routes.get("/schedule/find/:id", ScheduleController.show);
routes.post("/schedule/update", ScheduleController.update);

routes.post("/consultation", ConsultationController.store);
routes.get("/consultation/find/:id", ConsultationController.show);

module.exports = routes;