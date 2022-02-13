const router = require('express').Router()
const {
	getGoals,
	setGoals,
	updateGoals,
	deleteGoals,
} = require('../controllers/goalController')

const { protect } = require('../middlewares/authMiddleware')

// Declare with a clean routes
router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals)

module.exports = router
