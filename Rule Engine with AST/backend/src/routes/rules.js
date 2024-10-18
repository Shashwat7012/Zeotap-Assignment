const express = require('express');
const {
    createRuleController,
    combineRulesController,
    evaluateRuleController,
} = require('../controllers/ruleController');

const router = express.Router();

router.post('/create', createRuleController);
router.post('/combine', combineRulesController);
router.post('/evaluate', evaluateRuleController);

module.exports = router;
