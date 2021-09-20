package com.af.vehicle.service;

import com.af.vehicle.modle.Category;
import com.af.vehicle.modle.Vehicle;

import java.util.List;

public interface CategoryImp {

    public Category createCategory(Category category);
    public List<Category>getAllCategory();
}
