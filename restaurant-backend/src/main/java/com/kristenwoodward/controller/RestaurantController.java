package com.kristenwoodward.controller;
import com.kristenwoodward.model.persistence.Restaurant;
import com.kristenwoodward.model.requests.RestaurantRequest;
import com.kristenwoodward.repository.RestaurantRepository;
import com.kristenwoodward.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin

public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @PostMapping("restaurants/add")
    public String and(@RequestBody RestaurantRequest restaurantRequest) {
        Restaurant restaurant = new Restaurant();
        restaurant.setId(restaurantRequest.getId());
        restaurant.setName(restaurantRequest.getName());
        restaurant.setLocationDescription(restaurantRequest.getLocationDescription());
        restaurant.setAddress(restaurantRequest.getAddress());
        restaurant.setFoodItems(restaurantRequest.getFoodItems());
        restaurant.setLatitude(restaurantRequest.getLatitude());
        restaurant.setLongitude(restaurantRequest.getLongitude());
        restaurant.setSchedule(restaurantRequest.getSchedule());
        restaurant.setLocation(restaurantRequest.getLocation());
        restaurant.setLikes(restaurantRequest.getLikes());

        restaurantService.saveRestaurant(restaurant);
        return "Restaurant is added";
    }

    @GetMapping("restaurants/getAllRestaurants")
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }

    @GetMapping(value = "restaurants/getRestaurants", params = {"num"})
    public List<Restaurant> getRestaurants(@RequestParam("num") int num) {
        restaurantService.getAllRestaurants();
        return restaurantService.getRestaurantsByPage(num);
    }

    @GetMapping(value = "restaurants/sort", params = {"page", "order", "type"})
    public List<Restaurant> getSortedRestaurants(@RequestParam("page") int page,
                                                 @RequestParam("order") boolean order,
                                                 @RequestParam("type") String type) {
        restaurantService.getAllRestaurants();
        return restaurantService.getSortedRestaurants(page, order, type);
    }
    //Sort by address or name
    @GetMapping(value = "restaurants/query")
    public List<Restaurant> queryRestaurantsByType(
            @RequestParam(value = "query", required = false) String query,
            @RequestParam(value = "type", required = false) String type
    ) {
        restaurantService.getAllRestaurants();
        return restaurantService.queryRestaurantsByType(query, type);
    }
    //Update likes
    @PutMapping(value = "restaurants/like-dislike", params = {"id", "isLiked"})
    public void updateLikes(@RequestParam("id") Long id,
                            @RequestParam("isLiked") boolean isLiked) {
       this.restaurantService.updateLikeDislike(id, isLiked);
    }
}

