import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css'
import { Icon } from '@material-ui/core';
SidebarOption.propTypes = {
    
};

function SidebarOption({icon,title,number,selected}) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            {icon}
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;