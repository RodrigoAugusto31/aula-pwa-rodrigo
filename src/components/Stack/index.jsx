import { Stack } from "@mui/material"

const StackComponent = ({ children, ...rest}) => {
    return <Stack {...rest}>{children}</Stack>
}

export default StackComponent;