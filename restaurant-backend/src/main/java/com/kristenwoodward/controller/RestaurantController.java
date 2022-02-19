package com.kristenwoodward.controller;

import com.kristenwoodward.model.Restaurant;
import com.kristenwoodward.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurant")
@CrossOrigin

public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/add")
    public String and (@RequestBody Restaurant restaurant){
        restaurantService.saveRestaurant(restaurant);
        return "Restaurant is added";
    }

    @GetMapping("/getAllRestaurants")
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }
}
