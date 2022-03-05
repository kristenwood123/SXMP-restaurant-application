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

    @Column(name = "location_description")
    private String LocationDescription;

    @Column(name = "address")
    private String Address;

    @Column(name="food_items")
    private String FoodItems;

    @Column(name = "latitude")
    private String Latitude;

    @Column(name = "longitude")
    private String Longitude;

    @Column(name = "schedule")
    private String Schedule;

    @Column(name = "location")
    private String Location;

    @Column(name = "likes")
    private Long Likes;

    @Column(name = "dislikes")
    private Long Dislikes;

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

    public Long getLikes() { return Likes; }

    public void setLikes(Long likes) {
        Likes = likes;
    }

    public Long getDislikes() { return Dislikes; }

    public void setDislikes(Long dislikes) {
        Dislikes = dislikes;
    }
}

