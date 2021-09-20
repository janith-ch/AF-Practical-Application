package com.af.vehicle.controllers;

import com.af.vehicle.modle.Category;
import com.af.vehicle.modle.Vehicle;
import com.af.vehicle.service.CategoryService;
import com.af.vehicle.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;
    @PostMapping("/")
    public Category createCategory(@RequestBody Category category){
        return categoryService.createCategory(category);
    }
    @GetMapping("/")
    public List<Category>getAllCategory(){
        return categoryService.getAllCategory();
    }

}
