import { Box } from '@mui/material';
import React from 'react'
import { NavLink} from 'react-router-dom';

function Dropdown(props) {
    const {dropdown, setDropdown, path, name} = props


      
    
    
  return (
    <Box>
        <NavLink
                className="Navlink"
                to={path}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#ebe956" : "white",
                  };
                }}
              >
                <li
                  style={{ borderBottom: "1px solid black", padding: "10px" }}
                >
                  {name}{" "}
                </li>
        </NavLink>
    </Box>
  )
}

export default Dropdown