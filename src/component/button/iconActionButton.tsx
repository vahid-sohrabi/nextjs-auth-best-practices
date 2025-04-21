import React from 'react';
import { IconButton } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface IconButtonProps {
    Icon: SvgIconComponent; // Accepting an icon component as a prop
    onClick: () => void; // Click handler function
    label: string; // Button's aria-label or descriptive label
}

const IconActionButton: React.FC<IconButtonProps> = ({ Icon, onClick, label }) => {
    return (
        <IconButton color="primary" onClick={onClick} aria-label={label}>
            <Icon />
        </IconButton>
    );
};

export default IconActionButton;
