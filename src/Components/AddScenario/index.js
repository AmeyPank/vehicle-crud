import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import "./styles.css"
import axios from 'axios';
// import AllScenario from '../Allscenario';


const AddScenario = () => {
    const [scenarioName, setScenarioName] = useState('');
    const [scenarioTime, setScenarioTime] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'scenarioName') {
            setScenarioName(value);
        } else if (name === 'scenarioTime') {
            setScenarioTime(value);
        }
    };

    const handleAddScenario = () => {
        const newScenario = {
            scenarioName,
            scenarioTime
        };

        axios.post('http://localhost:3001/scenarios', newScenario)
            .then(response => {
                console.log('Scenario added successfully:', response.data);
                // Reset the input fields
                setScenarioName('');
                setScenarioTime('');
            })
            .catch(error => {
                console.error('Error adding scenario:', error);
            });
    };

    const handleReset = () => {
        // Reset the input fields
        setScenarioName('');
        setScenarioTime('');
    };

    return (
        <div className="container">
            <div><Sidebar /></div>
            <div className="scenario-container">
                <h2>Add Scenario</h2>
                <div className="input-container">
                    <div className="inputs">
                        <div>
                            <label htmlFor="scenarioName">Scenario Name</label>
                            <input
                                type="text"
                                id="scenarioName"
                                name="scenarioName"
                                value={scenarioName}
                                onChange={handleInputChange}
                                required
                                placeholder="Test Scenario"
                            />
                        </div>
                        <div>
                            <label htmlFor="scenarioTime">Scenario Time (seconds)</label>
                            <input
                                type="number"
                                id="scenarioTime"
                                name="scenarioTime"
                                value={scenarioTime}
                                onChange={handleInputChange}
                                required
                                placeholder="10"
                            />
                        </div>
                    </div>
                </div>
                <div id="btn">
                    <button className="green-button" onClick={handleAddScenario}>
                        Add
                    </button>
                    <button className="orange-button" onClick={handleReset}>
                        Reset
                    </button>
                    <button className="skyblue-button" onClick={() => window.history.back()}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddScenario;
