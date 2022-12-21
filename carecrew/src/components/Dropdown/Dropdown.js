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
                    color: isActive ? "#007a48" : "#504f6b",
                  };
                }}
              >
                <li
                  style={{ borderTop: "1px solid #eff1f6", padding: "10px" }}
                >
                  {name}{" "}
                </li>
        </NavLink>
    </Box>
  )
}

export default Dropdown