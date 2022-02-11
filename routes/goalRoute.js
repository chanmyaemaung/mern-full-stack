const router = require('express').Router()
const {
	getGoals,
	setGoals,
	updateGoals,
	deleteGoals,
} = require('../controllers/goalController')

// Declare with a clean routes
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(updateGoals)

module.exports = router
