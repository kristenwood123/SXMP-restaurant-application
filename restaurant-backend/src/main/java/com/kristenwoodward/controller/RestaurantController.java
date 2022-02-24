package com.kristenwoodward.controller;

import com.kristenwoodward.model.persistence.Restaurant;
import com.kristenwoodward.model.requests.RestaurantRequest;
import com.kristenwoodward.repository.RestaurantRepository;
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

    @Autowired
    private RestaurantRepository restaurantRepository;

    @PostMapping("/add")
    public String and (@RequestBody RestaurantRequest restaurantRequest){
        Restaurant restaurant = new Restaurant();
        restaurant.setName(restaurantRequest.getName());
        restaurant.setLocationDescription(restaurantRequest.getLocationDescription());
        restaurant.setAddress(restaurantRequest.getAddress());
        restaurant.setFoodItems(restaurantRequest.getFoodItems());
        restaurantRepository.save(restaurant);
        restaurantService.saveRestaurant(restaurant);
        return "Restaurant is added";
    }

    @GetMapping("/getAllRestaurants")
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }

    @GetMapping(value = "/getRestaurants", params = {"num"})
    public List<Restaurant> getRestaurants(@RequestParam("num") int num) {
        restaurantService.getAllRestaurants();
        return restaurantService.getRestaurantsByPage(num);
    }

}
