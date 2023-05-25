import React from 'react';
import Sidebar from '../Sidebar';
import "./styles.css"
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import { GoPencil } from "react-icons/go";




const AllScenario = () => {



  
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
    {
      id: 3,
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
    <div className='main'>
      <div>
        <Sidebar />
      </div>
      <div className='container'>

        <div className='h1andbtn'>
          <h2>All Scenarios</h2>
          <div className='btn'>
            <button className="green-button" >
              New Scenario
            </button>
            <button className="orange-button" >
              Add vehicle
            </button>
            <button className="skyblue-button" onClick={() => window.history.back()}>
              Delete All
            </button>
          </div>

        </div>
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

    </div>
  );
};

export default AllScenario;
