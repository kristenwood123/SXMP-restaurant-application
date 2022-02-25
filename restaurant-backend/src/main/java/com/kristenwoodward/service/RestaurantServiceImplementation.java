package com.kristenwoodward.service;

import com.kristenwoodward.model.persistence.Restaurant;
import com.kristenwoodward.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class RestaurantServiceImplementation implements RestaurantService {

    private List<Restaurant> allRestaurants = new ArrayList<>();

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Override
    public Restaurant saveRestaurant(Restaurant restaurant) {

//        restaurantRepository.save(restaurant);
        return restaurantRepository.save(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurants() {
        if (!this.allRestaurants.isEmpty()) {
            return this.allRestaurants;
        }
        this.allRestaurants = restaurantRepository.findAll();
        return this.allRestaurants;

    }

    @Override
    public List<Restaurant> getRestaurantsByPage(int page) {
        List<Restaurant> result = new ArrayList<>();
        for (int i = (page - 1) * 10; i < allRestaurants.size() && i < page * 10; i++) {
            result.add(allRestaurants.get(i));
        }
        return result;
    }

}
