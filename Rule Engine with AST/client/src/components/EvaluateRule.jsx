import React, { useState } from 'react';
import { evaluateRule } from '../api';

const EvaluateRule = () => {
    const [ast, setAst] = useState('');
    const [data, setData] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const astObject = JSON.parse(ast); 
        const dataObject = JSON.parse(data); 
        const evaluationResult = await evaluateRule(astObject, dataObject);
        setResult(evaluationResult);
    };

    return (
        <div>
            <h2>Evaluate Rule</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={ast} 
                    onChange={(e) => setAst(e.target.value)} 
                    placeholder="Enter AST as JSON"
                    required
                />
                <textarea 
                    value={data} 
                    onChange={(e) => setData(e.target.value)} 
                    placeholder="Enter data as JSON"
                    required
                />
                <button type="submit">Evaluate</button>
            </form>
            {result && (
                <div>
                    <h3>Evaluation Result:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default EvaluateRule;
