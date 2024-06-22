import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";
import { Category } from "../types/type";

import viteLogo from "../../public/vite.svg";
import image4 from "../assets/images/WALLPAPER OMEGA (28).jpg";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

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
  }
];

export default function UnderlineLink() {
  return (  
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
        gap: 6,
        backgroundColor: "divider",
        height: 40,
        width: "100%",
      }}
      onClick={preventDefault}
      //   variant="scrollable"
      //   scrollButtons="auto"
    >
      {categories.map((cat) => {
        return (
          <>
            <Link
              key={cat.id}
              href={`#${cat.denomination}`}
              underline="none"
              color={"secondary"}
            >
                <img src={cat.icon} alt={`Icon ${cat.denomination}`}  height={16} width={16}/>
              {cat.denomination}
            </Link>
            <Divider
              sx={{ height: 20, m: 0.5, borderColor: "gray" }}
              orientation="vertical"
            />
          </>
        );
      })}
    </Box>
  );
}
