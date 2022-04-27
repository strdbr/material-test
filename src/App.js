import { Feed } from "@mui/icons-material";
import { Box } from "@mui/system";
import Project from "./compontents/Project";
import Rightbar from "./compontents/Rightbar";
import Sidebar from "./compontents/Sidebar";

function App() {
  return (
    <Box
      sx={{
            padding: '10px',
            alignItems: "center",
        }}
    >
      <Project />
      <Project />
      <Project />
    </Box>
  );
}

export default App;
