// src/App.js
import React from 'react';
import CreateRule from './components/CreateRule';
import CombineRules from './components/CombineRules';
import EvaluateRule from './components/EvaluateRule';

const App = () => {
    return (
        <div>
            <h1>Rule Engine Frontend</h1>
            <CreateRule />
            <CombineRules />
            <EvaluateRule />
        </div>
    );
};

export default App;
