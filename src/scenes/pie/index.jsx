import { Box } from "@mui/system";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

function index() {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}

export default index;
