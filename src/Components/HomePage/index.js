import React, { useState } from 'react'
import Sidebar from '../Sidebar/index';
import "./styles.css"
import { IoIosAddCircle } from 'react-icons/io';
import { GoPencil } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
function Home() {

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const scenarios = [
    {
      id: 1,
      name: 'Scenario 1',
      time: 60,
      vehicles: 3,
    },
    {
      id: 2,
      name: 'Scenario 2',
      time: 120,
      vehicles: 1,
    },

    // Add more scenarios as needed
  ];


  const handleAddVehicle = (scenarioId) => {
    // Handle adding a vehicle for the given scenarioId
    console.log('Adding vehicle for scenario id:', scenarioId);
  };

  const handleEditScenario = (scenarioId) => {
    // Handle editing the scenario with the given scenarioId
    console.log('Editing scenario with id:', scenarioId);
  };

  const handleDeleteScenario = (scenarioId) => {
    // Handle deleting the scenario with the given scenarioId
    console.log('Deleting scenario with id:', scenarioId);
  };
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className='homepage'>


        <div className='dropwon'>
          <label htmlFor="direction">Scenario</label>
          <select
            id="direction"
            name="direction"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Select a direction</option>
            <option value="towards">Towards</option>
            <option value="backwards">Backwards</option>
            <option value="upwards">Upwards</option>
            <option value="downwards">Downwards</option>
          </select>
        </div>
        <div className="scenarioList">
          <table>
            <thead className='head'>
              <tr>
                <th>Scenario ID</th>
                <th>Scenario Name</th>
                <th>Scenario Time</th>
                <th>Number of Vehicles</th>
                <th>Add value</th>
                <th>Edit</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {scenarios.map((scenario) => (
                <tr key={scenario.id}>
                  <td>{scenario.id}</td>
                  <td>{scenario.name}</td>
                  <td>{scenario.time}</td>
                  <td>{scenario.vehicles}</td>
                  <td>
                    <span onClick={() => handleAddVehicle(scenario.id)}><IoIosAddCircle /></span>
                  </td>
                  <td>
                    <span onClick={() => handleEditScenario(scenario.id)}><GoPencil /></span>
                  </td>
                  <td>
                    <span onClick={() => handleDeleteScenario(scenario.id)}><RiDeleteBin6Line /></span>
                  </td>
                </tr>

              ))}

            </tbody>
          </table>
        </div>
        <div className="buttons">
          <button className="green-button" >
            Start Simulation
          </button>
          <button className="skyblue-button" >
            Stop Simulation
          </button>
        </div>
      </div>
    </>
  )
}

export default Home;