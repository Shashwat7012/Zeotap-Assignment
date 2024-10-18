import React, { useState } from 'react';
import { createRule } from '../api';

const CreateRule = () => {
    const [ruleString, setRuleString] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await createRule(ruleString);
        setResponse(data);
    };

    return (
        <div>
            <h2>Create Rule</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={ruleString} 
                    onChange={(e) => setRuleString(e.target.value)} 
                    placeholder="Enter rule string"
                    required
                />
                <button type="submit">Create</button>
            </form>
            {response && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default CreateRule;
