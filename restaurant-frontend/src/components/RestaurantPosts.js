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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container key={id}>
                <Grid item xs={3}>
                  <Card
                    elevation={3}
                    sx={{ width: 200, height: 200, margin: "10px" }}
                  >
                    <CardHeader
                      variant="h6"
                      subheader={description}
                      title={
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="h2"
                          align="center"
                        >
                          {name}
                        </Typography>
                      }
                    />

                    <CardContent
                      action={
                        <IconButton>
                          <FaRegHeart color="red" fillColor="red"></FaRegHeart>
                        </IconButton>
                      }
                    >
                      <Typography variant="body2" color="textSecondary">
                        {address}
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
