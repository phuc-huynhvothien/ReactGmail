import React from 'react';
import PropTypes from 'prop-types';
import './Mail.css'
import { IconButton } from '@material-ui/core';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import EmailIcon from '@material-ui/icons/Email';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import { useHistory } from 'react-router-dom';
Mail.propTypes = {

};

function Mail(props) {
    const history = useHistory();
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.pushState("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>

                    <LabelImportantIcon className="mail__important" />
                    <p>Title</p>
                    <p>10pm</p>
                </div>
                <div className="mail__message">
                    This is message
                </div>
            </div>
        </div>
    );
}

export default Mail;