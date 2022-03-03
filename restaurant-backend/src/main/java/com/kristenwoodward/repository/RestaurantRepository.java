package com.kristenwoodward.repository;

import com.kristenwoodward.model.persistence.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    @Query(value = "SELECT * FROM restaurants_in_sf WHERE "
            + "MATCH(address, FoodItems) "
            + "AGAINST (%?1%)",
            nativeQuery = true)
    public List<Restaurant> getByInput(String keyword);

    @Query(value = "select * from restaurants_in_sf where food_items like %:query%",
    nativeQuery = true)
    List<Restaurant> findRestaurantsByFoodType(@Param("query") String query);

    @Query(value = "select * from restaurants_in_sf where address like %:query%",
            nativeQuery = true)
    List<Restaurant> findRestaurantsByAddress(String query);
}
