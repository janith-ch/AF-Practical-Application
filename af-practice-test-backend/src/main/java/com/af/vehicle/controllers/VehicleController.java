package com.af.vehicle.controllers;

import com.af.vehicle.modle.Vehicle;
import com.af.vehicle.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @PostMapping("/")
    public Vehicle createVehicle(@RequestBody Vehicle vehicle){
        return vehicleService.createVehicle(vehicle);
    }
    @GetMapping("/")
    public List<Vehicle> getAllVehicle(){
        return vehicleService.getAllVehicle();
    }
    @PostMapping("/list/")
    public List<Vehicle> findByStatus(@RequestParam String status[]){
        return vehicleService.findByStatus(status);
    }


}
