import { Typography } from "@mui/material";

const TypographyComponent = ({ children, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>;
}

export default TypographyComponent;