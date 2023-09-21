import React from 'react';
import "../Login/Register/Sidebar.css";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
<div className="sidebar">
  <ul className="sidebar-links">
    <li className="item1">Volunteer</li>
    <Link to="/dashboard">

    <li className="item2">Dashboard</li>
    </Link>
    <li className="item3">Community</li>
  </ul>
</div>

  );
}

export default Sidebar;
