package com.kristenwoodward.service;


import com.kristenwoodward.model.persistence.Restaurant;

import java.util.List;

public interface RestaurantService {
  Restaurant saveRestaurant(Restaurant restaurant);
  public List<Restaurant> getAllRestaurants();
}
