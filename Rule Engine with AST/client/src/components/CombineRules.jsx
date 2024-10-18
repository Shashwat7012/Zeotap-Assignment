import React, { useState } from 'react';
import { combineRules } from '../api';

const CombineRules = () => {
    const [rules, setRules] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const rulesArray = rules.split(',').map(rule => rule.trim());
        console.log("Sending rules:", rulesArray); 
        const data = await combineRules(rulesArray);
        console.log("Response:", data); 
        setResponse(data);
    };
    

    return (
        <div>
            <h2>Combine Rules</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={rules} 
                    onChange={(e) => setRules(e.target.value)} 
                    placeholder="Enter rule strings separated by commas"
                    required
                />
                <button type="submit">Combine</button>
            </form>
            {response && (
                <div>
                    <h3>Combined AST:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default CombineRules;
