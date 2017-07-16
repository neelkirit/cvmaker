package com.yelolabs.cvmaker.Services;

/**
 * Created by neelkirit on 22/11/16.
 */
public class UtilsService {

    public String capitalizeFirstLetter(String text){
        return text.substring(0, 1).toUpperCase() + text.substring(1);
    }
}
