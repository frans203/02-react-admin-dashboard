import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        fontFamily="Poppins"
        color={colors.gray[100]}
        fontWeight="bold"
        variant="h4"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>

      <Typography
        variant="h5"
        fontFamily="Poppins"
        color={colors.greenAccent[400]}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
