import React from "react";
import { Container } from "react-bootstrap";
import { useGlobalContext } from "../contexts/context";
import { FaRegHeart } from "react-icons/fa";
import {
  CardContent,
  CardHeader,
  Typography,
  IconButton,
  Card,
  Grid,
} from "@mui/material";

const RestaurantPosts = () => {
  const { restaurants } = useGlobalContext();

  return (
    <div style={{ margin: "2rem" }}>
      <Grid container>
        {restaurants.map((restaurant) => {
          const { id, name, address, description } = restaurant;
          return (
            <div style={{ display: "flex" }}>
              <Grid container key={id}>
                <Grid item xs={3} spacing={3}>
                  <Card
                    elevation={3}
                    sx={{ width: 200, height: 200, margin: "10px" }}
                  >
                    <CardHeader
                      action={
                        <IconButton>
                          <FaRegHeart></FaRegHeart>
                        </IconButton>
                      }
                      title={name}
                      subheader={description}
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary">
                        {address.toLowerCase()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default RestaurantPosts;
