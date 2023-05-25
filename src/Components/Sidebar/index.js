import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/" className="sidebar__link">
                Home
            </Link>
            <Link to="/AddScenario" className="sidebar__link">
                Add Scenario
            </Link>
            <Link to="/AllScenario" className="sidebar__link">
                All Scenarios
            </Link>
            <Link to="/AddVehicle" className="sidebar__link">
                Add Vehicle
            </Link>
        </div>
    );
};

export default Sidebar;
