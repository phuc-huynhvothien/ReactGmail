import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcons from '@material-ui/icons/Notifications'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
Header.propTypes = {

};

function Header(props) {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton><MenuIcon />

                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">

                <IconButton><AppsIcon /></IconButton>
                <IconButton><NotificationsIcons /></IconButton>
                <IconButton> <Avatar /></IconButton>
            </div>
        </div>
    );
}

export default Header;