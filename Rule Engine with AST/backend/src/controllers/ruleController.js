const Rule = require('../models/rule');
const { createRule, combineRules, evaluateRule } = require('../services/ruleService');

// Create a rule
const createRuleController = async (req, res) => {
    const { ruleString } = req.body;
    try {
        const newRule = await createRule(ruleString);
        res.status(201).json(newRule);
    } catch (error) {
        console.error(error); 
        res.status(400).json({ message: 'Error creating rule', error });
    }
};

// Combine rules
const combineRulesController = async (req, res) => {
    const { rules } = req.body;
    try {
        const combinedAST = await combineRules(rules);
        res.status(200).json(combinedAST);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error combining rules', error });
    }
};

// Evaluate a rule against user data
const evaluateRuleController = (req, res) => {
    const { ast, data } = req.body;
    const result = evaluateRule(ast, data);
    res.status(200).json({ result });
};

module.exports = {
    createRuleController,
    combineRulesController,
    evaluateRuleController,
};
