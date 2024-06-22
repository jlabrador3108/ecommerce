import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Category } from "../types/type";

import viteLogo from "../../public/vite.svg";
import image4 from "../assets/images/WALLPAPER OMEGA (28).jpg";
import { Divider } from "@mui/material";

const categories: Category[] = [
  {
    id: 1,
    denomination: "Todos los productos",
    icon: viteLogo,
    image: image4,
  },
  {
    id: 2,
    denomination: "Pizzas",
    icon: viteLogo,
    image: image4,
  },
  {
    id: 3,
    denomination: "Alimentos",
    icon: viteLogo,
    image: image4,
  },
  {
    id: 4,
    denomination: "Belleza y Salud",
    icon: viteLogo,
    image: image4,
  },
  {
    id: 5,
    denomination: "Ropa y Accesorios",
    icon: viteLogo,
    image: image4,
  },
  {
    id: 6,
    denomination: "Material de Oficina",
    icon: viteLogo,
    image: image4,
  },
  {
    id: 7,
    denomination: "Juguetes",
    icon: viteLogo,
    image: image4,
  },
  {
    id: 8,
    denomination: "Otra cosa",
    icon: viteLogo,
    image: image4,
  },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 10 }} color="primary">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat.id + 20} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <img height={16} src={cat.icon} />
                    {cat.denomination}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {categories.map((cat) => (
              <>
                <Button
                  key={cat.id + 99}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <img height={16} src={cat.icon} />
                  {cat.denomination}
                </Button>
                <Divider
                  sx={{ height: 30, marginTop: 2, borderColor: "gray" }}
                  orientation="vertical"
                />
              </>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
