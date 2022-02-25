package com.kristenwoodward.comparators;

import com.kristenwoodward.model.persistence.Restaurant;

import java.util.Comparator;
import java.util.Locale;

public class RestarauntsByAddressComparator implements Comparator<Restaurant> {

    @Override
    public int compare(Restaurant o1, Restaurant o2) {
        return o1.getAddress().toLowerCase().compareTo(o2.getAddress().toLowerCase());
    }
}
