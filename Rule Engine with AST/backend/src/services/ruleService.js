const Rule = require('../models/rule');


const createRuleAST = (ruleString) => {
    const tokens = ruleString.split(/(\s+|AND|OR|\(|\))/).filter(token => token.trim() !== '');
    const operators = ['AND', 'OR'];

    const buildAST = () => {
        let currentNode = null;

        while (tokens.length) {
            const token = tokens.shift().trim();

            if (token === '(') {
                const leftNode = buildAST();
                const operator = tokens.shift(); 
                const rightNode = buildAST();
                currentNode = {
                    type: 'operator',
                    value: operator,
                    left: leftNode,
                    right: rightNode,
                };
            } else if (token === ')') {
                return currentNode; 
            } else if (operators.includes(token)) {
                continue; 
            } else {
               
                const operandNode = {
                    type: 'operand',
                    value: token,
                };
                if (!currentNode) {
                    currentNode = operandNode; // First operand
                } else {
                    currentNode = {
                        type: 'operator',
                        value: 'AND', // Default to AND for combination
                        left: currentNode,
                        right: operandNode,
                    };
                }
            }
        }
        return currentNode;
    };

    return buildAST();
};

// Function to create a rule
const createRule = async (ruleString) => {
    const ast = createRuleAST(ruleString);
    const newRule = new Rule({ ruleString, ast });
    await newRule.save();
    return newRule;
};

// Function to combine multiple ASTs
const combineRules = async (rules) => {
    if (rules.length === 0) return null; // Handle no rules case
    let combinedAST = null;

    for (const ruleString of rules) {
        const rule = await Rule.findOne({ ruleString });
        console.log("Found rule:", rule); // Log the found rule
        if (rule) {
            if (!combinedAST) {
                combinedAST = rule.ast; // Set the first rule's AST
            } else {
                // Combine with AND operator
                combinedAST = {
                    type: 'operator',
                    value: 'AND',
                    left: combinedAST,
                    right: rule.ast,
                };
            }
        } else {
            console.log(`Rule not found for string: ${ruleString}`); // Log if rule is not found
        }
    }

    console.log("Combined AST:", combinedAST); // Log the final combined AST
    return combinedAST;
};


// Function to evaluate the rule against user data
const evaluateRule = (ast, data) => {
    if (ast.type === 'operand') {
        // Handle comparisons
        const [attribute, operator, value] = ast.value.split(' ');
        const dataValue = data[attribute];
        switch (operator) {
            case '>':
                return dataValue > value;
            case '<':
                return dataValue < value;
            case '=':
                return dataValue === value.replace(/'/g, ''); // Remove quotes
            default:
                return false;
        }
    } else if (ast.type === 'operator') {
        const leftResult = evaluateRule(ast.left, data);
        const rightResult = evaluateRule(ast.right, data);

        switch (ast.value) {
            case 'AND':
                return leftResult && rightResult;
            case 'OR':
                return leftResult || rightResult;
            default:
                return false;
        }
    }
    return false;
};

module.exports = {
    createRule,
    combineRules,
    evaluateRule,
};
