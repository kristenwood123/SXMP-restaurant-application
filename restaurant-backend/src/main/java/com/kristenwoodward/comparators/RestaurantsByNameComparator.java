package com.kristenwoodward.comparators;

import java.util.Comparator;
import java.util.Locale;

import com.kristenwoodward.model.persistence.Restaurant;

public class RestaurantsByNameComparator implements Comparator<Restaurant> {
    @Override
    public int compare(Restaurant o1, Restaurant o2) {
        return o1.getName().toLowerCase().compareTo(o2.getName().toLowerCase());
    }
}
