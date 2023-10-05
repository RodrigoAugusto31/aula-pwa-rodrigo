import Button from '@mui/material/Button';

const ButtonComponent = ({ label, style, variant, uppercase, ...rest }) => {
    return <Button 
                className="primary"
                {...rest}
                variant={variant}
                style={{
                    border: null,
                    textTransform: uppercase ? 'uppercase' : 'none',
                    padding: 8,
                    ...style
                }}>{label}</Button>
}

ButtonComponent.defaultProps = {
    style: {},
    variant: "contained",
    uppercase: true,
}

export default ButtonComponent;