const router = require('express').Router();

const IndexPage = require('../../views/IndexPage');
const Reviews = require('../../views/Reviews');
const Lessons = require('../../views/Lessons');
const Team = require('../../views/Team');

router.get('/', async (req, res) => {
  res.renderComponent(IndexPage);
});

module.exports = router;

router.get('/reviews', (req, res) => {
  res.renderComponent(Reviews);
});
router.get('/lessons', (req, res) => {
  res.renderComponent(Lessons);
});
router.get('/team', (req, res) => {
  res.renderComponent(Team);
});
