import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        height: 30,
        color: "grey", backgroundColor: "white"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "grey", backgroundColor: "white" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="button" sx={{ p: "10px", color: "grey"}} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>
  );
}
