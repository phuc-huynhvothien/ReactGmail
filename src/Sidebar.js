import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearmeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import SidebarOption from './SidebarOption';
import { LabelImportant } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
Sidebar.propTypes = {

};

function Sidebar(props) {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} 
            className="sidebar__compose" 
            onClick={()=>dispatch(openSendMessage())}
            >Compose</Button>

            <SidebarOption icon={<InboxIcon />} title="Inbox" number="54" />
            <SidebarOption icon={<StarIcon />} title="Started" number="54" />
            <SidebarOption icon={<AccessTimeIcon />} title="Snoozed" number="54" />
            <SidebarOption icon={<LabelImportantIcon />} title="Important" number="54" />
            <SidebarOption icon={<NearmeIcon />} title="Sent" number="54" />
            <SidebarOption icon={<NoteIcon />} title="Drafts" number="54" />
            <SidebarOption icon={<ExpandMoreIcon />} title="More" number="54" />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;