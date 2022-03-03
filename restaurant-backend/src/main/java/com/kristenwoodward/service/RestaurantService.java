package com.kristenwoodward.service;
import com.kristenwoodward.model.persistence.Restaurant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RestaurantService {

  Restaurant saveRestaurant(Restaurant restaurant);
  public List<Restaurant> getAllRestaurants();

  public List<Restaurant> getRestaurantsByPage(int page);

  public List<Restaurant> getSortedRestaurants(int page, boolean order, String type);

  public List<Restaurant> queryRestaurantsByType(String query, String type);
}
