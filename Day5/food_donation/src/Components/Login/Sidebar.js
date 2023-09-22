import React from 'react';
import "../Login/Register/Sidebar.css";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
<div className="sidebar">
  <ul className="sidebar-links">
    <Link to="/list">

    <li className="item1">NGO</li>
    </Link>
    <Link to="/dashboard">

    <li className="item2">Dashboard</li>
    </Link>
    <li className="item3">Community</li>
  </ul>
</div>

  );
}

export default Sidebar;
