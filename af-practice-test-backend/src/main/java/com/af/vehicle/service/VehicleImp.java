package com.af.vehicle.service;

import com.af.vehicle.modle.Vehicle;

import java.util.List;

public interface VehicleImp {

    public Vehicle createVehicle(Vehicle vehicle);
    public List<Vehicle> getAllVehicle();
    public List <Vehicle> findByStatus(String[] status);
}
