import React from 'react';
import PropTypes from 'prop-types';
import "./EmailRow.css"
import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons/';
import { useHistory } from 'react-router-dom';
EmailRow.propTypes = {

};

function EmailRow({ title, subject, description, time }) {
    const history = useHistory();
    
    return (
        <div onClick={()=> history.push("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow__title">
                {title}
            </div>
            <div className="emailRow__message">
                {subject}&nbsp;
                <span className="emailRow__description">-&nbsp;
                    {description}
                </span>
            </div>
            <div className="emailRow__description">
                {time}
            </div>
        </div>
    );
}

export default EmailRow;