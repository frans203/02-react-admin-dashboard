import { Box } from "@mui/system";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

function index() {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

export default index;
