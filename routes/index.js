const express = require('express');
const router = express.Router();

const Event = require('../db/events');
const Goal = require('../db/goals');

// turtle

router.get('/', (req, res, next) => {
  res.json({
    message: 'Wrong Page 🐢'
  });
});

// event-routes

router.get('/events', (req, res, next) => {
  Event.getEvents().then((event) => {
    res.json(event);
  });
});

router.get('/events/:id', (req, res, next) => {
  Event.getEventById(req.params.id).then((event) => {
    res.json(event);
  });
});

router.post('/events/:id', (req, res, next) => {
  Event.createEvent(req.params.id, req.body).then((result) => {
    res.json(result);
  });
});

// goal-routes

router.get('/goals/', (req, res, next) => {
  Goal.getAllGoals().then((goals) => {
    res.json(goals);
  });
});

router.get('/goals/:id', (req, res, next) => {
  Goal.getOneGoals(req.params.id).then((goal) => {
    res.json(goal);
  });
});




module.exports = router;
