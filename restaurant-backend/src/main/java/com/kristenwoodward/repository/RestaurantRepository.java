package com.kristenwoodward.repository;

import com.kristenwoodward.model.persistence.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {

    @Query(value = "select * from restaurants_in_sf where food_items like %:query%",
    nativeQuery = true)
    List<Restaurant> findRestaurantsByFoodType(@Param("query") String query);

    @Query(value = "select * from restaurants_in_sf where address like %:query%",
            nativeQuery = true)
    List<Restaurant> findRestaurantsByAddress(String query);

    @Modifying
    @Query(value = "update restaurants_in_sf set likes = likes + 1 where id = ?1",
    nativeQuery = true)
    void updateLikes(Long id);

    @Modifying
    @Query(value = "update restaurants_in_sf set dislikes = dislikes + 1 where id = ?1",
            nativeQuery = true)
    void updateDisLikes(Long id);
}
