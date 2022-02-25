package com.kristenwoodward.model.persistence;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "restaurants_in_sf")
public class Restaurant {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty

    @Column(name = "id")
    private Long id;

    @Column(name= "name", nullable = false, unique = true)
    private String Name;

    @Column
    private String LocationDescription;

    @Column
    private String Address;

    @Column(name="food_items")
    private String FoodItems;

    @Column
    private String Latitude;

    @Column
    private String Longitude;

    @Column
    private String Schedule;

    @Column
    private String Location;

    public Restaurant() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getLocationDescription() {
        return LocationDescription;
    }

    public void setLocationDescription(String locationDescription) {
        LocationDescription = locationDescription;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getFoodItems() {
        return FoodItems;
    }

    public void setFoodItems(String foodItems) {
        FoodItems = foodItems;
    }

    public String getLatitude() {
        return Latitude;
    }

    public void setLatitude(String latitude) {
        Latitude = latitude;
    }

    public String getLongitude() {
        return Longitude;
    }

    public void setLongitude(String longitude) {
        Longitude = longitude;
    }

    public String getSchedule() {
        return Schedule;
    }

    public void setSchedule(String schedule) {
        Schedule = schedule;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }
}
