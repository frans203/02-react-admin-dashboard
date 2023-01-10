import React from "react";
import { tokens } from "../theme";
import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            fontSize="20px"
            fontWeight="bold"
            sx={{ color: colors.gray[100] }}
          >
            {title}
          </Typography>
          <Typography fontSize="16px" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <ProgressCircle progress={progress} />
          <Box display="flex" justifyContent="space-between">
            <Typography
              fontSize="16px"
              fontStyle="italic"
              sx={{ color: colors.greenAccent[600] }}
            >
              {increase}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StatBox;
