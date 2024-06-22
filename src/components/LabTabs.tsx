import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "@mui/material";

import image4 from "../assets/images/WALLPAPER OMEGA (28).jpg";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: "primary",
          }}
        >
          <TabList
            centered
            onChange={handleChange}
            aria-label="lab API tabs example"
            // textColor="primary"
            // indicatorColor="primary"
            // TabIndicatorProps={{
            //   style: {
            //     backgroundColor: "red", // Cambia esto por el color que desees
            //   },
            // }}
          >
            <Link href={`#asd`} underline="none" color={"secondary"}>
              <img src={image4} alt={`Icon ${"asd"}`} height={16} width={16} />
              {"asdasd"}
            </Link>
            <Tab label="Item One" value="1" sx={{ color: "white" }} />
            <Tab label="Item Two222" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Item Three" value="4" />
            <Tab label="Item Three" value="5" />
            <Tab label="Item Three" value="6" />
            <Tab label="Item Three" value="7" />
            <Tab label="Item Three" value="8" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            backgroundColor: "divider",
          }}
        >
          Item One11111{" "}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
        <TabPanel value="5">Item Three</TabPanel>
        <TabPanel value="6">Item Three</TabPanel>
        <TabPanel value="7">Item Three</TabPanel>
        <TabPanel value="8">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
