import { Category } from "../types/type.d";
import { Product } from "../types/type.d";

//GRID
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//Card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import image4 from "../assets/images/apple mac iphone hd wallpapers.jpg";

const products: Product[] = [
  {
    id: 1,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 2,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 3,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 4,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 5,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 6,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 7,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 8,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 9,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 10,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 11,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 12,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
  {
    id: 13,
    denomination: "Pan",
    description: "Buen pan rico matador",
    idcategory: 1,
    image: image4,
    price: 500,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Products({ category }: { category: Category }) {
  return (
    <main
    //   style={{ display: "flex", alignContent: "center", alignItems: "center" }}
    >
      <h1>
        <img
          src={category.icon}
          alt={`Icon ${category.denomination}`}
          height={16}
          width={16}
        />
        {category.denomination}
      </h1>

      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={1} >
          {products.map((prod) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={prod.id+40}>
                <Item>
                  <Card sx={{ width: "100%"}}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={prod.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {prod.denomination}
                      </Typography>
                      <Typography gutterBottom variant="h6" color={"green"} >
                        CUP {prod.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {prod.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{display: "block", alignContent: "center", alignItems: "center"}}>
                      <Button sx={{backgroundColor: "aquamarine"}} size="large">Comprar</Button>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </main>
  );
}
