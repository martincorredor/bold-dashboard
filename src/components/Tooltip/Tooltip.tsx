import React, { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Props } from './interface';
import './styles.css';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';

const CustomTooltip: React.FC<Props> = ({ type, text, redirect }) => {
  const getIcon = () => {
    if (type === 'info') {
      return <InfoIcon className="tooltip-icon" />;
    }
    if (type === 'help') {
      return <HelpIcon className="tooltip-icon" />;
    }
    return <InfoIcon className="tooltip-icon" />;
  };

  return (
    <Tooltip title={text} placement="top-start" className="custom-tooltip">
      {getIcon()}
    </Tooltip>
  );
};

export default CustomTooltip;
