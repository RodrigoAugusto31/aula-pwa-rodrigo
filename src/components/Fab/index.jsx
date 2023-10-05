import Fab from '@mui/material/Fab';

const FabComponent = ({ children, ...props }) => (
    <Fab {...props}>
        {children}
    </Fab>
);

export default FabComponent;