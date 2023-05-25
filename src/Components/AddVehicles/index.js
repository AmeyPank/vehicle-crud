import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import "./styles.css"

function AddVehicle({ value }) {


  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Sidebar />
      <div className='addVehicle'>
        <h3>Vehicle/add</h3>
        <h2>Add Vehicle</h2>
        <div className='inputContainer'>
          <div id='inputs' className='inputs'>

              <div>
                <label htmlFor="direction">Scenario List</label>
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
            <div>
              <label htmlFor="scenarioName">Vehicle Name</label>
              <input
                type="text"
                id="scenarioName"
                name="scenarioName"
                value={value}
                onChange={value}
                required
                placeholder='Test Scenario'
              />
            </div>
            <div>
              <label htmlFor="scenarioName">Speed</label>
              <input
                type="text"
                id="scenarioName"
                name="scenarioName"
                value={value}
                onChange={value}
                required
                placeholder='Test Scenario'
              />
            </div>
            <div>
              <label htmlFor="scenarioName">Position X</label>
              <input
                type="text"
                id="scenarioName"
                name="scenarioName"
                value={value}
                onChange={value}
                required
                placeholder='Test Scenario'
              />
            </div>
            <div>
              <label htmlFor="scenarioName">Position Y</label>
              <input
                type="text"
                id="scenarioName"
                name="scenarioName"
                value={value}
                onChange={value}
                required
                placeholder='Test Scenario'
              />
            </div>

            <div>
              <label htmlFor="direction">Direction</label>
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
          </div>
        </div>

        <div id='btn'>
          <button className="green-button" >
            Add
          </button>
          <button className="orange-button">
            Reset
          </button>
          <button className="skyblue-button" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>
      </div>
    </>
  )
}

export default AddVehicle