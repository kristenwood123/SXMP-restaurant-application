package com.kristenwoodward.service;
import com.kristenwoodward.comparators.RestarauntsByAddressComparator;
import com.kristenwoodward.comparators.RestaurantsByNameComparator;
import com.kristenwoodward.model.persistence.Restaurant;
import com.kristenwoodward.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

@Service
public class RestaurantServiceImplementation implements RestaurantService {

    private List<Restaurant> allRestaurants = new ArrayList<>();
    private List<Restaurant> sortedRestaurantsByName;
    private List<Restaurant> sortedRestaurantsByAddress;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Override
    public Restaurant saveRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurants() {
        if (!this.allRestaurants.isEmpty()) {
            return this.allRestaurants;
        }
        this.allRestaurants = restaurantRepository.findAll();
        this.sortedRestaurantsByName = new ArrayList<>(this.allRestaurants);
        this.sortedRestaurantsByAddress = new ArrayList<>(this.allRestaurants);
        Collections.sort(this.sortedRestaurantsByName, new RestaurantsByNameComparator());
        Collections.sort(this.sortedRestaurantsByAddress, new RestarauntsByAddressComparator());
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

    @Override
    public List<Restaurant> getSortedRestaurants(int page, boolean order, String type) {
        List<Restaurant> result;
        if(type.equals("name")) {
            result = order ? getSortedListAscending(page, this.sortedRestaurantsByName):
                    getSortedListDescending(page, this.sortedRestaurantsByName);
        } else if (type.equals("address")) {
            result = order ? getSortedListAscending(page, this.sortedRestaurantsByAddress):
                    getSortedListDescending(page, this.sortedRestaurantsByAddress);
        } else {
            result = this.getRestaurantsByPage(page);
        }
        return result;
    }

    @Override
    public List<Restaurant> queryRestaurantsByType(String query, String type) {
        List<Restaurant> result = null;
        query = query.toLowerCase();
        if(type.equals("address")) {
            result = restaurantRepository.findRestaurantsByAddress(query);
        } else {
            result = restaurantRepository.findRestaurantsByFoodType(query);
        }
            return result;
    }



    private List<Restaurant> getSortedListAscending(int page, List<Restaurant> restaurantList) {
        List<Restaurant> result = new ArrayList<>();
        for (int i = (page - 1) * 10; i < restaurantList.size() && i < page * 10; i++) {
            result.add(restaurantList.get(i));
        }
        return result;
    }

    private List<Restaurant> getSortedListDescending(int page, List<Restaurant> restaurantList) {
        List<Restaurant> result = new ArrayList<>();
        for (int i = restaurantList.size()-1 - (page-1)*10; i >= 0 && i > restaurantList.size()-1 - (page-1)*10 - page * 10; i--) {
            result.add(restaurantList.get(i));
        }
        return result;
    }


}
