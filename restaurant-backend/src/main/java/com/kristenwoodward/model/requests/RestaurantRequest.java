package com.kristenwoodward.model.requests;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data

public class RestaurantRequest {
    @JsonProperty
    private Long id;

    @JsonProperty
    private String Name;

    @JsonProperty
    private String LocationDescription;

    @JsonProperty
    private String Address;

    @JsonProperty
    private String FoodItems;

    @JsonProperty
    private String Latitude;

    @JsonProperty
    private String Longitude;

    @JsonProperty
    private String Schedule;

    @JsonProperty
    private String Location;

}