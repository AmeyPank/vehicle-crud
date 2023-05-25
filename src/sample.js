import React, { useState, useEffect } from 'react';

const AddScenario = ({ onAddScenario }) => {
    const [scenarioName, setScenarioName] = useState('');
    const [time, setTime] = useState('');

    const handleAddScenario = () => {
        if (scenarioName.trim() !== '' && time.trim() !== '') {
            const newScenario = {
                scenarioName,
                time
            };
            onAddScenario(newScenario);
            setScenarioName('');
            setTime('');
        }
    };

    return (
        <div>
            <h2>Add Scenario</h2>
            <label>
                Scenario Name:
                <input
                    type="text"
                    value={scenarioName}
                    onChange={(e) => setScenarioName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Time:
                <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleAddScenario}>Add Scenario</button>
        </div>
    );
};

const App = () => {
    const [scenarios, setScenarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/scenarios')
            .then(response => response.json())
            .then(data => setScenarios(data));
    }, []);

    const handleAddScenario = (newScenario) => {
        fetch('http://localhost:3001/scenarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newScenario)
        })
            .then(response => response.json())
            .then(data => {
                setScenarios([...scenarios, data]);
            });
    };

    return (
        <div>
            <h1>Scenario Management</h1>
            <AddScenario onAddScenario={handleAddScenario} />
            {/* Render the scenarios */}
            <ul>
                {scenarios.map(scenario => (
                    <li key={scenario.id}>
                        <h3>{scenario.scenarioName}</h3>
                        <p>Time: {scenario.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
