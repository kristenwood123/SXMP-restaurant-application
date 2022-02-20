package com.kristenwoodward.model.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data

public class RestaurantRequest {
    @JsonProperty
    private String name;

    @JsonProperty
    private String description;

    @JsonProperty
    private String address;

}
