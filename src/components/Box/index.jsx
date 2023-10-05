import * as React from 'react';
import { Box } from '@mui/material';

const BoxComponent = ({ children, ...rest }) => {
    return <Box {...rest}>{children}</Box>
}

export default BoxComponent;