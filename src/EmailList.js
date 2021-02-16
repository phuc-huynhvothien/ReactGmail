import React from 'react';
import PropTypes from 'prop-types';
import "./EmailList.css"
import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import Section from './Section';
import EmailRow from './EmailRow';
EmailList.propTypes = {

};

function EmailList(props) {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected />
                <Section Icon={PeopleIcon} title="primary" color="red" />
                <Section Icon={LocalOfferIcon} title="primary" color="red" />
            </div>
            <div className="emailList__lists">
                <EmailRow subject="Hey hey hey !!!!" title="T" description="This is text" time="10pm"/>
            </div>
            </div>
    );
}

export default EmailList;